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

#### Each Pleasure contains:  
 - `title` - property which represents a display name of the Pleasure
 - `desctiption` - is optional and may contain additional info that explains whole point of particular pleasures
 
Once you completed the list of pleasures, page is ready to implement daily _checklist feature_ in it.  

The schema of the page is looks like [that](./pleasures.png)
But you should use Material UI components only to implement it.

**X axis on the top** - represents dates of the last week from Monday to Sunday. 

**Y axis on the left** - represents pleasures list. When user hover a particular Pleasure for 2-3 seconds - show a tooltip with Pleasure's description.

#### Edit Pleasure
By clicking on the name of the Pleasure user could see a modal window with 2 inputs filled with data about chosen pleasure - it's `title` and `description`, and `Save` button. Backdrop of the modal window should be semitransparent black. 

To save new title and/or description user should click on the `Save` button. If user clicks outside of the modal window - close it without saving.   

#### **_Entities_** 
Each **_Day_** entity contains following properties:
* `date` - date which it pepresents
* `pleasures` - the Array of titles of Pleasures that was completed in following day. For example, if I have 2 pleasures `pl1` and `pl2` and both was completed, property value would be - `['pl1', 'pl2']`

Each **_Pleasure_** entity contains following properties:
* `title` - basically this is the short name of the Pleasure, and it's required
* `description` -

#### To send requests to server, make sure you passed `authorization` header with the token as a value

## Server URL - `/api/:entityName`
So if you want to send requests related to Days - use `/api/days` endpoint

All Pleasures related requests would be sent to `/api/pleasures` endpoint

#### **`GET`**

**_Returns_** an Array with entities from DB of user you mentioned in authorization token

Top make a GET request make sure you added `authorization` header with the token.

#### `POST`

**_Returns_** just created entity from DB

To make a POST request you would need to pass a request body with the object of new Day. It should contain all required properties to work correct.

Serer automatically gonna check whether DB contains an entity with the same required properties. In case if it's already exists, you'll receive an error. 

#### `PUT`

**_Returns_** updated entity from DB

To make PUT request you would need to send request body with updated properties for your entity in order to change it.

#### `DELETE`

**_Returns_** deleted Day entity from DB

To make DELETE request you would need to pass an ID of the entity you want to delete. 

It's easy, let's say I want to delete Pleasure with id `ksoiwe53oo34o`, so I would need to send DELETE request with URL `/api/pleasures/ksoiwe53oo34o` 
