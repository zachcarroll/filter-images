## General Notes on Project

Please look in the /src folder at App.js and ImageContainer.js for relevant React components. Please note, a couple assumptions were made:
1. Data from .csv file was converted to a JS array and stored in /src/data.js. If this data was expected to be handled in another way, please let me know!
1. Images were not resized to fit a browser window. As the images represent raw data, I didn't want to manipulate them in any way. This makes the UI/UX less-than-ideal, as the images are very large. Let me know if you'd like to see some style improvements there.
1. React siblings require a key prop, which must be unique. For images, I assumed the combination of image name and label would create a unique identifier. It works on the provided data set, but please let me know if this is an incorrect assumption.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Install dependencies before trying to run the app locally:

### `npm install`


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
