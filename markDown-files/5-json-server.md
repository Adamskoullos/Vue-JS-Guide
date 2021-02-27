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

# Conditionally showing data

In the image below we change the `job` value from an empty array to `null`.  When we do this we need to wait for the data to load and for job to be update to a value before we render to the DOM, otherwise the null bvalue of job will be undefined.  To do this we wrap the html output inside a div using the `v-if` so the job properties will not load until `job` has a value:

![Screenshot from 2021-02-27 02-48-09](https://user-images.githubusercontent.com/73107656/109373370-3e4bee80-78a6-11eb-9169-f89252fc149a.png)

Adding to this we can also use a `v-else` div to show content while the data is loading.  The example below shows a loading message:

![Screenshot from 2021-02-27 02-55-16](https://user-images.githubusercontent.com/73107656/109373530-3d678c80-78a7-11eb-918e-a8a03e0bfabe.png)

The above example works well with single object data, however when working with the parent view where we are dealing with an array of objects, our data object starts as an empty array rather than a null value.  In this situation the following pattern can be used:

![Screenshot from 2021-02-27 03-39-21](https://user-images.githubusercontent.com/73107656/109374473-65f28500-78ad-11eb-8806-8e48e6a55974.png)

Notice this is the parent view of the previous example, the `v-for` div is wrapped in a `v-if` div and because we are working with an initial empty array we use `v-if="jobs.length"` to show once the jobs array has a length of one or more.