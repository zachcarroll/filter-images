import React, { Component } from 'react';

import {ImageContainer} from './ImageContainer';
import './App.css';
import {data} from './data';

/** The entry-point component for our app. */
class App extends Component {
  constructor(props) {
    super(props);

    /** 
     * Creates an object whose keys are all the labels from the provided data set,
     * and whose values represent whether or not to display images that match the 
     * given label.
    */
    const labels = data
        .map(n => n.Label)
        .reduce((total, n) => {
          if (total[n] === undefined) {
            total[n] = false;
          }

          return total;
        }, {});

    this.state = labels;

    /** 
     * Sets the 'this' context for handleFilterChange to the component class instance. 
     * See https://reactjs.org/docs/faq-functions.html#why-is-binding-necessary-at-all 
     * for an explanation of why this is necessary.
     */
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  /** 
   * Fires on updates to the label checkbox filter checked status. 
   * Updates component state accordingly. 
   */
  handleFilterChange(event) {
    const name = event.target.name;
    const value = event.target.checked;

    this.setState({[name]: value});
  }

  render() {
    /** 
     * Filters out any images that don't match the selected filters, 
     * and generates an ImageContainer component for each.
     * 
     * Assumes that the image file name + the label result in a unique identifier.
     */
    const images = data
        .filter(n => this.state[n.Label] === true)
        .map(n => 
          <ImageContainer key={n.Img_Name + n.Label} 
                          top={n.Top} 
                          left={n.Left} 
                          width={n.Width} 
                          height={n.Height} 
                          label={n.Label} 
                          name={n.Img_Name} />);
    
    /** Generates the UI checkboxes based on component's state. */
    const filters = Object.keys(this.state)
        .sort()
        .map(n => 
            <div key={n}>
              <label>{n}</label>
              <input name={n} 
                     type="checkbox" 
                     checked={this.state[n]} 
                     onChange={this.handleFilterChange} />
            </div>);

    return (
      <div className="App">
        <header>
          <h1>Road Sign Labels Image Data Set</h1>
          <h2>Zach Carroll</h2>
        </header>

        <div className="Filters">
          <h3>Select the road signs you'd like to see matching images for:</h3>
          <form>
            {filters}
          </form>
        </div>

        <hr />
        
        <div className="Results">
          <h3>Matching images:</h3>
          {images}
        </div>

      </div>
    );
  }
}

export default App;
