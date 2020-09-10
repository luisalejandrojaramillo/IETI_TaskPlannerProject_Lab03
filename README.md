![](images/react-material-heroku.png)

<h1 align="center">1.3 Task Planner Project - Front End</h1>

[![npm](https://img.shields.io/badge/npm-v6.13.4-red.svg)](https://www.npmjs.com/)
[![npx](https://img.shields.io/badge/dependencies-npx-orange)](https://www.npmjs.com/package/npx)
[![material](https://img.shields.io/badge/dependencies-material--ui-yellow)](https://material-ui.com/)
[![react-router](https://img.shields.io/badge/dependencies-react--router-blue)](https://reacttraining.com/react-router/)
[![heroku](https://img.shields.io/badge/%E2%86%91_Deploy_to-Heroku-7056bf.svg)](https://www.heroku.com/)


## Enlaces

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://ietitaskplannerlab.herokuapp.com/)

[![Azure](https://aka.ms/deploytoazurebutton)](https://taskplanner.z21.web.core.windows.net/)


## Author
Luis Alejandro Jaramillo R.

## Credenciales para ingresar
* Email:luis
* Pwd:123

## Steps

### Parte 1

1. Create a new React JS project.

    ```javascript
    npx create-react-app task-planner-app
    ```
2. Create the Login.js component and the CSS if needed (use Material-UI library!)

![](images/login.png)

3. Create a navigation drawer component with mocked user data (https://material-ui.com/demos/drawers/)

![](images/navigation-drawer.png)

4. Create the main view that display the tasks using card layouts (https://material-ui.com/demos/cards/). 
    This will be your model to represent a task:
  ```javascript
       {
    	"description": "some description text ",
    	"responsible": {
    		"name": "Santiago Carrillo",
    		"email": "sancarbar@gmail"
    	},
    	"status": "ready",
    	"dueDate": 156464645646
    }
```


![](images/main.png)

5. Learn about service workers and offline support: https://codelabs.developers.google.com/codelabs/offline/#0

6. Use what you just learned to make your App work offline.

7. Deploy your App to Heroku (https://dev.to/smithmanny/deploy-your-react-app-to-heroku-2b6f)

8. Deploy your App as an Azure Webapp (https://devblogs.microsoft.com/premier-developer/deploying-react-apps-to-azure-with-azure-devops/)

9. Submit your github repo along with the heroku and azure url of your solution!

### Parte 2
1. Open the project created on Part 1.

2. Create the NewTask.js component and the corresponding CSS file if needed (use the Material-UI library!).

3. Modify the App.js component so that it uses [BrowserRouter](https://reacttraining.com/react-router/web/example/basic) to enable the navigation from a "+" [floating action button](https://material-ui.com/components/floating-action-button/) in the main view to take the user to the *NewTask* component.

4. Implement the logic to be able to connect the main view so that the new task is added to the list on the main view when the user clicks the add button.

Remember the model to represent a task:
  ```javascript
       {
    	"description": "some description text ",
    	"responsible": {
    		"name": "Santiago Carrillo",
    		"email": "sancarbar@gmail"
    	},
    	"status": "ready",
    	"dueDate": 156464645646
    }
```
5. Implement the UserProfile.js component to update the user profile details (make sure this updates your navigationDrawer in your main view):

6. Create a [Modal](https://material-ui.com/utils/modal/) to display the options for filtering the list of tasks.

7. Implement the logic so that the data is filtered according to the applied filters.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
