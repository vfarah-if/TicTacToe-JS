## React tic-tac-toe
The concept is based largely on the [tic-tac-toe tutorial](https://reactjs.org/tutorial/tutorial.html) published by react, however I have taken the same concepts and written tests with Jest and Enzyme for each scenario before I worked through the tutorial trying to understand react concepts. I renamed certain things to make it more readable, altered the format slightly, used constants to explain the array positions. This is more for anyone wanting to practise TDD with a familiar pattern, learning REACT and TDD in the same space. 

Once you have mastered this, feel free to go to the same tutorial link and try to do one of the other tutorials using the same testing constructs.

![React tic tac toe](images/react-tic-tac-toe.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Additional test strategy
[https://github.com/webpack-contrib/json-loader](https://github.com/webpack-contrib/json-loader) is a new way I wanted to experiment with scenario based testing. I based my testing pattern on scenarios, so the JSON is formatted in such a way that each scenario is presented with an example, test data and a final expectation. The thing is I usually tweek with the package.json to allow me to import files, and then I reference them usually with some odd default format, but this was painless and easy to npm install the library and use it as required.

![Custom Scenario based testing](images/board-test-scenarios.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
