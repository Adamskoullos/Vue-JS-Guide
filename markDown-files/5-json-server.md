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

The below example shows the same basic Get for a sub-view:

![Screenshot from 2021-02-27 02-29-14](https://user-images.githubusercontent.com/73107656/109372845-9af9da00-78a3-11eb-9d6e-35730010a152.png)

We use the same mounted() hook so the fetch is made as the view is called however to target the sub-view we use `+ this.id` at the end of the endpoint. We can do this as we already have access to the `id` because we accept it as prop.  As normal we then add the new object to the `job` array within the data object and then we can access this data via the object using dot.notation within data fields up in the `template`.