# How the router is wired up

Adding Vue router to a project adds a router folder and views folder to the file structure.  Index.js (within the router folder) is now the main router file for Vue.

Component files now make up parts of a view/page and are imported into views when they are used.

Views are then imported into the router (index.js) the main switch board and then each view is routed through to App.vue to be displayed. 

Within the router switchboard (index.js) each view has a rout set up within the router array.  The router is then exported.

To activate the router it is imported into main.js.  We create the App, then add the router, then mount the App to the html element. This part comes pre-configured when vue router is included in the build. 

When a nav link triggers the router, the specific view is injected into the App.vue `<template>` within the `<router-view/>` tag.  

Therefore default html that is present on all pages/views for example a navigation bar can be directly placed into the App.vue template with straight html or through a component tag and any dynamically injected html from views is added and removed by the router via the `<router-view>` tag. Note the image below shows the navigation html uses `<router-link>` tags instead of a traditional `<a>` tag set-up:

![Screenshot from 2021-02-26 06-09-05](https://user-images.githubusercontent.com/73107656/109262310-3aae5e00-77f9-11eb-800f-e207693523db.png)


Thats the overview, lets dig deeper.

# Router Links

Using `<router-link>` tags for navigation links allows Vue to intercept and manage the routing to new views, which is key to preventing a page reload.  Under the hood Vue renders the html with `<a>` tags and also adds classes:

![Screenshot from 2021-02-26 07-28-28](https://user-images.githubusercontent.com/73107656/109269323-3e93ad80-7804-11eb-851d-5a40e4e5b309.png)

![Screenshot from 2021-02-26 07-34-08](https://user-images.githubusercontent.com/73107656/109269936-2c663f00-7805-11eb-8489-5519af739bcb.png)

![Screenshot from 2021-02-26 07-34-23](https://user-images.githubusercontent.com/73107656/109269938-2ec89900-7805-11eb-85a6-8e735e87d6d2.png)

When we use `<router-link>` tags we can also use data binding, this is helpful incase if in the future the actual pathname to the view changes the link will still work and does not need to be changed.  This is because the `to` attribute is bound to the route name and not the route path:

![Screenshot from 2021-02-26 08-04-02](https://user-images.githubusercontent.com/73107656/109272747-368a3c80-7809-11eb-9d1f-22307e716ae6.png)



