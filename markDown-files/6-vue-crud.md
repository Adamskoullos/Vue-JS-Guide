# Project overview

Basic todo with full crud operations

![Screenshot from 2021-02-27 03-57-32](https://user-images.githubusercontent.com/73107656/109374811-f92cba00-78af-11eb-8596-332e2ba5ff73.png)

This project will use json server for the practice of using fetch with each crud operation.

The project build process is the focus here as well as modelling patterns.

# Set up the project 

- Create the vue project
- Create GitHub repo
- Fire up vue server
- Install and fire up json-server (in a new terminal)
- Remove any boiler plate files and code not used

# Set up the home page 

Set up home page and json file so each data object is being fetched and the title being displayed on the home page as a starting point.

![Screenshot from 2021-02-27 05-16-35](https://user-images.githubusercontent.com/73107656/109376215-fd120980-78ba-11eb-9cb3-a0ddcfdb3408.png)

# Externalise the template used to display tasks on the home page

This is to be a reusable component, located within the components folder to be added to the home view component template.  This component will display the individual tasks/jobs as they are rendered to the parent component

1. Create new component in components folder

Parent Component, the view where our child component is to be nested:

2. Add the component tag within the template of the view/parent component 

3. Import the component 

4. Add the component to the components object 

5. Pass in and bind any props to be accessible within the child component. In this case the task object is being passed via props.  We get access to this from the `v-for="task in tasks"`  

![Screenshot from 2021-02-28 02-01-32](https://user-images.githubusercontent.com/73107656/109405490-ef1ac200-7968-11eb-8464-a3a116793032.png)

Child component:

6. Accept any props that are passed down, by adding them to props in the data object

7. Create template:
    - Add outer div for styling the container
    - Add inner div1 to house the `{{  title }}` and manage action buttons
    - Add inner div2 below div1 to house `{{ details }}`

8. Add functionality to open and close details div from clicking `h2` title:
    - Add `v-if` to details div to only show if `showTaskDetails` is true
    - Add `showTaskDetails` to data object, with initial value of false
    - Add `@click="showDetails"` to title `h2`
    - Add method to methods using the toggle pattern

![Screenshot from 2021-03-01 04-42-26](https://user-images.githubusercontent.com/73107656/109452879-a3d7e080-7a48-11eb-90cf-ed43e647b1dc.png)

9. Adding icons for Crud actions

    - Set up the link from this url for material icons: `https://google.github.io/material-design-icons/`
    - Scroll down to `icon font for the web` grab the link and place in the head of index.html
    - Grab icons to be used and copy code into the title div
    - Position the items in the div using flexbox
    - style the individual icons using the material-design class

![Screenshot from 2021-02-28 03-55-18](https://user-images.githubusercontent.com/73107656/109407448-cf8b9580-7978-11eb-8340-46b9b1dd115e.png)

Thats the basic template for the component we now move on to work on the functionality of crud operations

# Crud

## DELETE request

1. Store the dynamic endpoint in simple variable within data object to make it quick and easy to reuse for each request `uri: http://localhost:3000/tasks/ + this.task.id`

2. Add click event to delete icon

3. Add method to methods to remove the task from the data base and also emit the delete event up to the parent to update the home view:
    - Remove task from database by making a delete request to the json server: 

![Screenshot from 2021-03-01 01-32-06](https://user-images.githubusercontent.com/73107656/109441722-f48e1000-7a2d-11eb-8c26-27ad6ddd1a04.png)

    - Add a custom `&emit` event to bubble up from the child component to the parent component where the tasks array is located, so we can write a method in the parent component to update the tasks array and update the tasks that are rendered to the DOM:  The data that is emitted (passed back up) is the id of the task to be deleted:

![Screenshot from 2021-03-01 01-49-29](https://user-images.githubusercontent.com/73107656/109442521-5fd8e180-7a30-11eb-865b-42181197cf2d.png)

4. Add the custom event listener within the parent component inside child component tags:

![Screenshot from 2021-03-01 01-55-17](https://user-images.githubusercontent.com/73107656/109442907-310f3b00-7a31-11eb-9b84-87d68aebd058.png)

5. Add the method to the parent components methods and remove the task from the tasks array:

![Screenshot from 2021-03-01 02-17-03](https://user-images.githubusercontent.com/73107656/109444059-3a4dd700-7a34-11eb-9870-19016fe0604d.png)

The above pattern accepts the emitted task id, then uses the filter method to cycle through the tasks array.  Each task in the tasks array that does not have the id, is added to the new array which is reassigned to the tasks array. The task with the id is excluded.  This process updates the tasks that are rendered to the DOM.

So now the data base and browser have been update.

## PATCH request to update a task to complete

When we update all or part of an existing data object we need to send a fully structured fetch request which also includes `headers` and `body` properties.  The headers state that the content sent is json and the body includes an object with only the key/value pairs to be updated.  The object is wrapped turning the object into json:

1. Send PATCH request:
    - Add a `@click` to the complete icon
    - Add a the method with the PATCH request

The below pattern is toggling a boolean 

![Screenshot from 2021-03-01 02-59-41](https://user-images.githubusercontent.com/73107656/109446770-32913100-7a3a-11eb-93ab-2ece35c04919.png)

Next update local data (parent tasks array) to match database

2. Add custom event `$emit('complete')` and pass up the task id

![Screenshot from 2021-03-01 03-43-52](https://user-images.githubusercontent.com/73107656/109449562-b51cef00-7a40-11eb-8996-aacbae99333a.png)

3. Add a listener for the custom event (parent component template, inside child component tag)

![Screenshot from 2021-03-01 03-51-45](https://user-images.githubusercontent.com/73107656/109449867-776c9600-7a41-11eb-845c-68ea2de25aeb.png)

4. Add the method to update/toggle the task.complete value

![Screenshot from 2021-03-01 04-16-16](https://user-images.githubusercontent.com/73107656/109451226-e1d30580-7a44-11eb-808e-d3ff83115ed9.png)

5. Add a dynamic `:class="{ complete: task.complete }"` to toggle the class `.complete` when complete is true.  Add the class and change the left border to green when complete:

![Screenshot from 2021-03-01 04-46-18](https://user-images.githubusercontent.com/73107656/109453132-2f517180-7a49-11eb-83b6-eb4b4587e040.png)

![Screenshot from 2021-03-01 04-46-39](https://user-images.githubusercontent.com/73107656/109453139-34162580-7a49-11eb-9cb0-ff7c19781465.png)

![Screenshot from 2021-03-01 04-46-55](https://user-images.githubusercontent.com/73107656/109453144-36787f80-7a49-11eb-9be6-97f892309073.png)


## POST request - Add new task

1. Add new view `AddTask.vue`

2. Create form adding `v-model` to connect data properties to input fields

3. Add data object properties

4. Add `@submit.prevent="handleSubmit"` event listener, note the event modifier preventing the default page reload

5. Add the `handleSubmit()` method to methods, for now just console.log('to prove') and come back to this once the router is set up

The below image shows the work so far within the new view `AddTask.vue`:

![Screenshot from 2021-03-01 09-50-25](https://user-images.githubusercontent.com/73107656/109480553-91bf6780-7a73-11eb-9c7a-6f87ab704f1a.png)

Now we move over the index.js to set up the router:

6. Set up router (index.js)
    - Add route
    - Import `AddTask.vue` view

 ![Screenshot from 2021-03-01 09-54-58](https://user-images.githubusercontent.com/73107656/109481050-32158c00-7a74-11eb-9b59-46972e4df6a6.png)

 Now for a quick test to prove so far:

- The route path is working and the form is being displayed
- The `v-model` is set up and and the method is working by submitting the form and `console.log(this.title, this.details)` 

![Screenshot from 2021-03-01 09-55-53](https://user-images.githubusercontent.com/73107656/109481155-56716880-7a74-11eb-9e44-61b2ebcb9980.png)

Now we can get back to the handleSubmit method and work on the logic. Make a POST request and redirect the user.  Note: we do not need to attach an id as the JSON server or other database will automatically provide a unique id for each new object.

7. Create the new data object to be posted to the database, the values to be filled dynamically

8. Add a fetch POST request to the method

9. Then redirect the user to the Home.vue to see the task list and the new task.  This is done by using `this.$router.push('/')` to push to the home page route.  

10. Then lastly add a `.catch`

![Screenshot from 2021-03-01 10-57-34](https://user-images.githubusercontent.com/73107656/109488043-f29f6d80-7a7c-11eb-92cf-3cdffc2f28d5.png)

![Screenshot from 2021-03-01 10-58-47](https://user-images.githubusercontent.com/73107656/109488200-24b0cf80-7a7d-11eb-8a13-4e7366ab6fa7.png)

![Screenshot from 2021-03-01 10-59-00](https://user-images.githubusercontent.com/73107656/109488211-27abc000-7a7d-11eb-9723-4b75c022a7a7.png)


## Navbar component

Create separate component to be nested within the template tags of App.vue. This way the component will be present with all views.

1. Create `Navbar.vue` within the components folder

2. Structure the navbar template and add the routes for each link using the route name: 

![Screenshot from 2021-03-01 13-27-37](https://user-images.githubusercontent.com/73107656/109503218-e83b9e80-7a91-11eb-9c0e-0e8a57c98787.png)

**App.vue:**

3. Add the Navbar component to the root component (App.vue):

    - Add Navbar tag to App.vue template
    - Import Navbar
    - Add the Navbar component within components within the export default object

![Screenshot from 2021-03-01 13-35-51](https://user-images.githubusercontent.com/73107656/109504100-0e157300-7a93-11eb-9bb2-4f1f8327e41b.png)



## Edit and Update tasks

We will have a separate edit view component that opens when the task edit icon is clicked that pre-populates with the existing data values by using v-model two way data bind:

1. Add new EditTask.vue to the views folder and add an `<h1>` for now

2. index.js - Add the route for the EditTask.vue and import the file. Note the path to have `/:id` to dynamically attach the id of the task.  This is used as the params key within the router-link.

![Screenshot from 2021-03-02 06-27-35](https://user-images.githubusercontent.com/73107656/109607616-6777b380-7b20-11eb-9d8f-879f06e7dfad.png)

3. SingleTask.vue - Make the task edit icon a link to the edit view and pass in the route parameter for the task:

    - Wrap the edit icon `<span>` tag with a `<router-link>` tag 
    - Add the `:to=""` to tell the router-link where to go.  This includes the `EditTask component` and the `path`. The path is where we use the `:id` params from earlier and map the key to the `task.id`:
 
![Screenshot from 2021-03-02 06-34-15](https://user-images.githubusercontent.com/73107656/109608143-52e7eb00-7b21-11eb-9b47-6ce4f42ea460.png)

Now we have the EditTask view that is being shown when a user clicks the edit icon with a task.  Now we need to create the form template for the EditTask view. Here we will reuse the AddTask form template to start with.

4. Alter the form so it pre-populates the existing values and then on submit save any changes to the data base and updates in the Home.view (tasks list)

- Remove the existing submit handler and leave for now
- Create data properties with initial empty strings so the `v-model` has two way data flow

![Screenshot from 2021-03-02 06-49-48](https://user-images.githubusercontent.com/73107656/109609648-888dd380-7b23-11eb-88fb-efa8c965f948.png)

![Screenshot from 2021-03-02 06-50-03](https://user-images.githubusercontent.com/73107656/109609658-8d528780-7b23-11eb-9712-333ffe577947.png)

- Accept the route parameter as a prop within the component. To do this we need to add `props: true` to the route within index.js:

![Screenshot from 2021-03-02 06-55-31](https://user-images.githubusercontent.com/73107656/109610172-4add7a80-7b24-11eb-82f0-f7390eb937fd.png)

- Then accept the props within the EditTask component to gain access to the `id`:

![Screenshot from 2021-03-02 06-56-52](https://user-images.githubusercontent.com/73107656/109610296-7a8c8280-7b24-11eb-803c-feb30b14711e.png)

- Now we can make a fetch request to the data base using the id

We will do this on the `mounted()` hook so the the data is retrieved as the EditTask view is displayed:

This is a get request so there is no method required. We get the data, turn it into an object and save the values to the equivalent data properties.  Because the data properties have a `v-model` two way data binding the values are shown within the input fields and available to the user to be edited:

![Screenshot from 2021-03-02 07-15-00](https://user-images.githubusercontent.com/73107656/109612023-056e7c80-7b27-11eb-866c-dba0b287f104.png)

So now the user has made their changes and hits the update submit button, we need to handle this and make a POST fetch request and also redirect them back to the Home.view where they can see their new changes:

## PATCH request

1. Add a submit handler to update the task

2. Make a fetch request to update the database

3. Redirect the user back to the Home.vue where all the tasks are

![Screenshot from 2021-03-02 08-12-47](https://user-images.githubusercontent.com/73107656/109618238-35ba1900-7b2f-11eb-8b8e-477307f55856.png)

![Screenshot from 2021-03-02 08-25-24](https://user-images.githubusercontent.com/73107656/109619638-eecd2300-7b30-11eb-9075-08d166db1bd9.png)

The complete EditTask.vue component  below:

![Screenshot from 2021-03-02 08-25-56](https://user-images.githubusercontent.com/73107656/109619654-f260aa00-7b30-11eb-9a75-f6ca9dca7af9.png)


