This is an experimental project and is still in progress. It is a SPA project built with React.js, Redux and Firebase.
The application aims to connect volunteer communities for beach cleaning activities of the coast of California. The user can login with the email and password in the application as well as with the facebook, google or github account. Can navigate the map and easily identify all public beaches in California with map markers to find brief information about locations and to generate a waste collection initiative or other joint activities for the same purpose. The initiatives are saved in firestore
database with the user's credentials. As future functionalities to implement:
-full CRUD for initiative management.
-focus on styles of app
-developing the potential for potential volunteers to become involved in existing initiatives
-messaging, etc.

For state management I used redux, react-redux and redux-thunk as middleware.
Database and applications are hosted on Firestore and for authentication I choose to use FirebaseUi Auth, FirebaseUi Library and Firebase Ui React components for react wrappers on top. It is easy to handle the UI flows for signing with email addresses and passwords,and google, facebook and github integration and ,of course React-redux-firebase for good integration with redux and support for authentication.

To build map I choose to work with Leaflet because it is an open-source Javascript project for maps interactions with a lot of available plugins  and React-leaflet for simplicity, performance and usability.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
