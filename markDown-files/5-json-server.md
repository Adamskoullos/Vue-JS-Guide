# Set up

We already have the vue cli local server running so we open a new terminal to install the json server.

`npm install -g json-server`

Spin up the server:

`json-server --watch data/db.json`

The sever gives us an end point to work with.

# Fetching the data

The data is fetched by the component that will be working with it.  We can use the mounted() hook to fire this process as the component mounts the DOM. 

The basic (Get) request pattern below.

1. Add the endpoint inside quotes
2. once received turn json to JS object
3. Add the object to the Jobs array
4. use the catch for any errors

![Screenshot from 2021-02-27 02-08-18](https://user-images.githubusercontent.com/73107656/109372305-c3340980-78a0-11eb-9851-ba5205eb3c4b.png)