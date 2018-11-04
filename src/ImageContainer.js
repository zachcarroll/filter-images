import React from 'react';

/** 
 * ImageContainer function component.
 * 
 * Renders an image with a box drawn around the relevant signage.
 */
export function ImageContainer(props) {
  return (
    <div className="ImageContainer">
      <div style={{top: props.top, left: props.left, width: props.width, height: props.height}} 
           className="ImageLabel"></div>
      <img src={'images/' + props.name} alt={props.label} />
    </div>);
}
