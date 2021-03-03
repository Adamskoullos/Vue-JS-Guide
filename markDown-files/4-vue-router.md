# Basic structure and patterns to wire router system up 

ToC:
[How the router is wired up](#How-the-router-is-wired-up)<br>
[Router Links](#Router-Links)<br>
[Folder Structure](#Folder-Structure)<br>
[Setting up Sub-Views and Route Parameters](#Setting up-Sub-Views-and-Route-Parameters)<br>
[404 Page and Redirects](#404-Page-and-Redirects)<br>
[Forward/Backward navigation using browser history](#Forward/Backward-navigation-using-browser-history)<br>
[Lazy loading](#Lazy-loading)<br>

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

# Folder Structure

The way components are organised within a project is subjective and the size and complexity of the project will determine this. However the below model appears to be a best practice structure to maintain scalable projects:

1. Individual reusable components which are not views in themselves to be placed within the components folder, such as navigation, footer etc

2. Views that do not have any nested sub-views to placed directly within the views folder

3. Views that have sub-views are placed with any sub-views within a sub-folder within the views folder

Organising components in this way makes a project very modular and easy to maintain and scale.


# Setting up Sub-Views and Route Parameters

When routing to sub-views we use route parameters.  Typically the route parameter used is the `:id` of the sub-view, this is coded in a dynamic way `/jobs/:id`.

The way that it becomes dynamic is in the link to the sub-view from within the parent component.  Again the link uses the `<router-link>` tags, the route is to the route object `name` and the tag also has the params attribute. This is the key part, where the route parameter is mapped dynamically to the id of the sub-view.  

We can access the components route object data within the component by using the `$route`.  

1. index.js - Set up the route object in the routes array, using the dynamic slug `:id` 
2. index.js - Import the component into index.js

3. Sub-view component - Store the id of the current view within the returned data object we can then use the `{{ id }}` as a dynamic field within the template:

![Screenshot from 2021-02-26 11-15-39](https://user-images.githubusercontent.com/73107656/109293639-fa180a00-7823-11eb-8202-8ef1f6ffd374.png)

We can accept the `props: id` into the sub-view component by using the following pattern instead of using the `data()` function as long as we set the `props: true` within index.js:

![Screenshot from 2021-02-26 11-46-50](https://user-images.githubusercontent.com/73107656/109296704-ad82fd80-7828-11eb-9ddc-e469ea05884f.png)

![Screenshot from 2021-02-26 11-46-32](https://user-images.githubusercontent.com/73107656/109296707-aeb42a80-7828-11eb-9dc7-6e54b6e6fda0.png)


4. Parent view - Set up a router link from the parent view to the sub-view:
    - The `<router-link>` tags to include `:to="{ name: 'routeObjectName' }"` pointing to the components route name
    - We also want to pass through the `params` attribute, in order to dynamically target each data object id. This dynamically adds the id value as the sub-view slug.  An image is powerful here:

![Screenshot from 2021-02-26 11-30-47](https://user-images.githubusercontent.com/73107656/109295102-14eb7e00-7826-11eb-968d-1256fddaeee3.png)

The params id is mapped to job.id:

![Screenshot from 2021-02-26 11-33-20](https://user-images.githubusercontent.com/73107656/109295310-727fca80-7826-11eb-85be-5a1aa03a6564.png)


# 404 Page and Redirects

Redirect:

![Screenshot from 2021-02-26 12-25-46](https://user-images.githubusercontent.com/73107656/109299937-c4781e80-782d-11eb-9f40-988b0e4af7f0.png)

Catchall routes:

![Screenshot from 2021-02-26 12-34-21](https://user-images.githubusercontent.com/73107656/109300834-fa69d280-782e-11eb-88d1-6bc54926d175.png)


# Forward/Backward navigation using browser history

![Screenshot from 2021-02-26 12-52-40](https://user-images.githubusercontent.com/73107656/109302678-87159000-7831-11eb-8edb-f5782d4fb442.png)


# Lazy loading 

Lazy loading splits up a websites files so they are not all initially loaded. Components can be loaded in groups or when the router serves the view. The below example shows one way to lazy a single component so it will not be loaded until a user clicks the view:

![Screenshot from 2021-02-26 13-02-56](https://user-images.githubusercontent.com/73107656/109303604-f475f080-7832-11eb-86b9-36b5da17fb86.png)
