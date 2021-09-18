# SUM-UP
This is a simple application to provide an ability to use some psychological practice on a comfort way.

### run
To run the application for local development you would need to run `dev` script in the `root` folder.

Or, if you like to run server and client separately:  
1) go to `server` folder and run `dev` script
2) go to `client` folder and run `start` script

### root scripts
- *`start`* - starts a server
- *`dev`* - runs client and server in a parallel to provide you a quick way to run the app
- *`build`* - build an application for heroku hosting

### technology stack
* [React JS](https://reactjs.org/)
* [Material UI](https://mui.com/getting-started/installation/)
* [Redux](https://redux.js.org/)
* [axios](https://www.npmjs.com/package/axios)
* [formik](npmjs.com/package/formik)
* [yup](https://www.npmjs.com/package/yup)

## Junior React - test task
Your task is to develop a new `Pleasures` page.

To do so, add corresponding route to the project's routing system, and attach a new component to the route.
Make sure your route is not accessible until user successfully logged in.

Each user in the app, should have ability to create and manage his own list of Pleasures. It means that Pleasures are editable. You should place `creatte pleasure` button and provide user the ability to edit any of his Pleasures.

Each Pleasure contains:  
 - `title` - property which represents a display name of the Pleasure
 - `desctiption` - is optional and may contain additional info that explains whole point of particular pleasures
 
Once you completed the list of pleasures, page is ready to implement daily _checklist feature_ in it.  

The schema of the page is looks like [that](./pleasures.png)
But you should use Material UI components to implement it.

X axis on the top - represents dates of the last week from Monday to Sunday. 
Y axis on the left - represents pleasures list. When user hover a particular Pleasure for 2-3 seconds - show a tooltip with Pleasure's description.
