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

Thats the basic template for the component we now move on to work on the functionality of the crud operations

# Crud

