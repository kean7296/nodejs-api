## Available Scripts

In the project directory, you can run:

### configuration

In the connection.js you must configure the attribute of connection base on what MySQL credential you have on your PC.

## `node migration.js up`

To run migration


### `npm install`

To install all dependencies

### `node .`

Runs the app in the development mode.\
Open [http://localhost:8080/login] to view it in your browser.

### `npm test`

Testing all routes on application

### available routes
in POST, PUT and DELETE the body must be in x-www-form-urlencoded

/admin/login (GET)
    a login page

/account-login (POST)
    for verifiying account to access other routes

/admin/user/add (POST)
    for adding user data
        following parameters must have:
            - firstname
            - lastname
            - address
            - postcode
            - contact
            - email
            - username
            - password

/admin/user/edit/:id (PUT)
    to edit existing user

/admin/user/delete/:id (DELETE)
    to delete certain account by id

/admin/user/multiple-delete (DELETE)
    to delete multiple user
        ids paramaeter must have in array

/admin/user/get (GET)
    to retrieve all users



