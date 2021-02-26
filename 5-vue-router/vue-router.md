# How the router is wired up

Adding Vue router to a project adds a router folder and views folder to the file structure.  Index.js (within the router folder) is now the main router file for Vue.

Component files now make up parts of a view/page and are imported into views when they are used.

Views are then imported into the router (index.js) the main switch board and then each view is routed through to App.vue to be displayed. 

To activate the router it is imported into main.js.  We create the App, then add the router, then mount the App to the html element. This part comes pre-configured when vue router is included in the build. 

Thats the set-up, when a nav link triggers the router, the specific view is injected into the App.vue `<template>` within a `<router>` tag.  

Therefore default html that is present on all pages/views for example a navigation bar is directly placed into the App.vue template and any dynamically injected html is added and removed by the router via the `<router>` tag.

![Screenshot from 2021-02-26 06-09-05](https://user-images.githubusercontent.com/73107656/109262310-3aae5e00-77f9-11eb-800f-e207693523db.png)


Thats the overview, lets dig deeper.
