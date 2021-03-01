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

8. Add functionality to open and close details div from clicking title div:
    - Add `v-if` to details div to only show if `showTaskDetails` is true
    - Add `showTaskDetails` to data object, with initial value of false
    - Add `@click="showDetails"` to title div
    - Add method to methods using the toggle pattern

![Screenshot from 2021-02-28 02-28-46](https://user-images.githubusercontent.com/73107656/109405904-b4b32400-796c-11eb-96c5-ae04156a8c51.png)

9. Adding icons for Crud actions

    - Set up the link from this url for material icons: `https://google.github.io/material-design-icons/`
    - Scroll down to `icon font for the web` grab the link and place in the head of index.html
    - Grab icons to be used and copy code into the title div
    - Position the items in the div using flexbox
    - style the individual icons using the material-design class

![Screenshot from 2021-02-28 03-55-18](https://user-images.githubusercontent.com/73107656/109407448-cf8b9580-7978-11eb-8340-46b9b1dd115e.png)

Thats the basic template for the component we now move on to work on the functionality of crud operations

# Crud

## Delete request

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

## Patch request to update a task to complete