# Setting up a Vue project
First make sure to have the latest version of Node and NPM installed. For debian linux users install NVM to do this and manage versions. A guide for this is [here](https://gist.github.com/SriVinayA/56335800e19a508c97bfa4f980a870cf)
Then install the Vue CLI, note sudo is only for linux to command as admin:

```
sudo npm install -g @vue/cli
```
confirm Vue is correctly installed by checking the version:

```
vue --version
```
At this point Node, NPM and Vue are ready to go.

We use the Vue CLI to install all the components and dependencies that make up a core Vue project.  To do this we:

1. Open up a terminal, this can be from the vs code terminal
2. Navigate into the directory the new project folder will be located within
3. From there create a new Vue project with the following command (I am using linux, check for windows and mac):

```
vue create projectName
```
4. Then cd into the new project directory

```
cd projectName
```
From here use the command: `code .` to open project in vs code if not already open.  Or open vs code > file > folder and go to folder location.  

First thing to do is push local repo to GitHub and publish. 

Then within the terminal spin up the local server `npm run serve` which provides a local host address that can then be copied and pasted into the browser.  Off to the races.

# Grabbing elements to work on
When working with templates in Vue projects, we do not use querySelector, instead we use the Vue ref attribute and give elements a ref name:

![Screenshot from 2021-02-23 10-46-50](https://user-images.githubusercontent.com/73107656/108833379-a6f44c00-75c4-11eb-800e-4bfdfb9bb8b9.png)

Above we first grab an element using the ref attribute and then we reference the element to work on it by using the following syntax(as shown above):

```
$refs.name
```

An example would be to grab the element and then use a reference to it within a function that is triggered on a click event and change the class:

![Screenshot from 2021-02-23 11-27-24](https://user-images.githubusercontent.com/73107656/108837419-1fa9d700-75ca-11eb-84a3-8c97abc4ada7.png)


# Multiple Components

When installing a Vue project from the Vue CLI, there is a standard structure to how all components are joined and connected through to index.html and ultimately rendered to the browser.

The main gateway through to index.html is through main.js which is accepts components passed through from App.vue.  All components are exported and imported up through App.vue.  Here is an example visual of a component tree:

![Screenshot from 2021-02-23 11-48-43](https://user-images.githubusercontent.com/73107656/108839537-1b32ed80-75cd-11eb-8fe4-17bef16ed01c.png)

When using components there is a 3 stepped process required before we can show them:

1. Import the module into App.vue
2. Add/register the component to the components property within the exported object
3. Add the component to the `<template>` within App.vue

Below is an example of this:

![Screenshot from 2021-02-23 12-17-46](https://user-images.githubusercontent.com/73107656/108842419-2ab43580-75d1-11eb-9e20-f25a0dcfc6d4.png)

# Managing Styles

Each component has it's own style tags that can house either scoped styles for the component or global styles.

Using scoped style tags does require more resources so a more effective way if possible is to be more specific with selectors, so scoped is not required.

It is also good practice to within the assets folder have a global.css file for global styles.  The file is then imported into main.js:

![Screenshot from 2021-02-23 12-48-35](https://user-images.githubusercontent.com/73107656/108845539-7668de00-75d5-11eb-9b85-a7f8cf0eda9d.png)

Note that global styles can be overridden by a specific component. 

# Passing data with props

Data/props can be passed down the component tree, this allows data to be more dynamic and components to be more reusable. Also if multiple components use the same data, the data only needs to be defined in one place (A single source of truth).

Props are passed into a component via it's `<tag>` within the `<template>`. Below is a nice pattern in which to do this:

1. First we add the data/props in the data object within the `<script>` tags in the parent component. Then we pass the prop down from the parent component within the component tag inside the `<template>` tags.  Notice how because the props are first returned from the data object we can use data bind on the props within the component tags making these values more dynamic. Side not here: props do not have to be returned in the data object first, they can be directly placed within the component tags. 

![Screenshot from 2021-02-23 13-57-05](https://user-images.githubusercontent.com/73107656/108853802-0eb79080-75df-11eb-9c72-33b37432f284.png)

2. We then need to accept the prop inside the child component within the `<script>` tags, using the pattern in the image below.
3. And lastly we use the prop by adding it within double curly braces within the `<template>` tags for that component also as in the image below.

![Screenshot from 2021-02-23 13-45-31](https://user-images.githubusercontent.com/73107656/108852349-694fed00-75dd-11eb-814a-66b8c0dbe470.png)

Multiple props can be passed in this way.

This last image shows how the prop 'theme' has been passed down and accepted and then used to change the divs class depending on the props value:

![Screenshot from 2021-02-23 14-23-47](https://user-images.githubusercontent.com/73107656/108857229-ca2df400-75e2-11eb-89cf-0189e9dbdce9.png)

# Emitting custom events

A custom event can be fired by a child component and listened to and acted on by the parent component.  In order to set this up we need to create a custom event and when triggered emit the event:

In the example below the child component is closing a modal when the div is clicked.  On click, a method in the child component is fired which emits a custom event up the component tree to its parent by using `$emit('customEvent)`.

Then in the parent component the child component has a `<tag>` within the `<template>` tags and within the child component tags an event listener for the custom event is placed.  The callback is a method that is defined in the parents methods. Lets step through this pattern:

1. Child component - Set up a click event listener on the div which fires the callback

![Screenshot from 2021-02-24 06-30-14](https://user-images.githubusercontent.com/73107656/108957662-cabd9d80-7669-11eb-903e-8f654919faec.png)

2. Define the callback within the methods, in the child component, adding the custom event

![Screenshot from 2021-02-24 06-33-08](https://user-images.githubusercontent.com/73107656/108957907-2d169e00-766a-11eb-8b22-594dd75e282f.png)

3. Add an event listener for the custom event to the parent component, within the child components tag

![Screenshot from 2021-02-24 06-34-12](https://user-images.githubusercontent.com/73107656/108958049-53d4d480-766a-11eb-9e45-de45ad96b0a1.png)

4. Define the callback within the parent components methods

![Screenshot from 2021-02-24 06-36-45](https://user-images.githubusercontent.com/73107656/108958288-ad3d0380-766a-11eb-88f4-47da6494c8ff.png)


# Event Modifiers

We can access event modifiers by using the dot notation:

`@click.self="function"`

# Slots

We use props when passing data such as arrays, strings or booleans into a component.  We use slots if we are passing more complex data in such as form templates and other structured HTML.

There can be one default slot and multiple named slots.  Lets look at the pattern for this:

1. Parent component - The child component now has an opening and closing tag within the `<template>` tags and any standard html used within is passed as the default slot.  Further named slots can be added by using the `<template>` tags inside the slot and using `v-slot:name` to name the slot.

![Screenshot from 2021-02-24 08-09-46](https://user-images.githubusercontent.com/73107656/108967634-ad8fcb80-7677-11eb-9c83-b0b5d7653c3e.png)

2. Child component - The default slot is added to the child component by simply adding `<slot>` tags.  Named slots are added with further `<slot>` tags which have the name attribute and the value of the specific slot name:

![Screenshot from 2021-02-24 08-13-01](https://user-images.githubusercontent.com/73107656/108968011-20994200-7678-11eb-8a1f-4abc4717bcb3.png)


# Reusing the same modal component by passing in further template slots

Once a template slot has been structured, the same component can use it and reuse it.  In the example below we build on the modal example from earlier, using the modal component template and passing a second template slot down from the parent:

In the example below:

1. Parent component - we first copy and paste the template slot and then alter as required.  In this case we are:
    - Adding a second button to open the second modal
    - Adding a toggle function for the second button within methods
    - Adding the second method name in the v-if of the second modal
    - And update the custom close event callback to trigger the toggle method to close the second modal
    - And lastly adding a second showModalTwo property in the components returned object

![Screenshot from 2021-02-24 10-00-37](https://user-images.githubusercontent.com/73107656/108983810-29dddb00-7687-11eb-8416-43eb67101602.png)

![Screenshot from 2021-02-24 10-01-25](https://user-images.githubusercontent.com/73107656/108983905-4548e600-7687-11eb-9ecf-76f6d6a031bd.png)

2. Child component - We use the same custom event 'close' to trigger different callbacks on each modal, so we only need the existing closeModal method in the child component.  
