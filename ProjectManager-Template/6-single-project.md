# Initial set-up

Create the view component `ProjectDetails`, import the view into the `index.js` router and then wrap each project within the `ProjectsList` component with a `router-link` using the project id params.

First here is the route using `:id` params:

![Screenshot from 2021-03-17 07-49-08](https://user-images.githubusercontent.com/73107656/111432699-45238f80-86f5-11eb-8e6d-3ff90a16efdf.png)

`props: true` is added so we can accept the props within the `ProjectDetails` component and access the project id:

![Screenshot from 2021-03-17 07-52-20](https://user-images.githubusercontent.com/73107656/111433074-b6634280-86f5-11eb-957a-29906ae9e9e0.png)

Now we have access to the project `id` within `ProjectDetails` so we can now make a request to firebase to grab the project information.


Then this is the template for the `ProjectsList` component showing how each project is wrapped within a router-link. Note the `:to` pattern which includes the params:

![Screenshot from 2021-03-17 07-54-16](https://user-images.githubusercontent.com/73107656/111433268-fb877480-86f5-11eb-8dd5-4b79987baaad.png)

# Single project view

## Redirecting user to the new project as it is created

Now that we have the `ProjectDetails` view we can redirect the user to the new project as it is created. 

To do this we need to alter a couple of things so that we have access to the doc params.  

Within the `useCollection` composable within the `try` block within the `addDoc()` function save the response to a const and return `res`.  This way when we call it within `NewProject` we can get access to the new firestore object which has the project id that we need in order to redirect.  So first up here is the amended `useCollection` composable:

![Screenshot from 2021-03-17 10-35-39](https://user-images.githubusercontent.com/73107656/111454427-870c0000-870c-11eb-8d9b-2aad80ee273a.png)

Next on the `NewProject` side we add a `const res` before the await where we invoke `addDoc()` and save the project object when it is returned from firebase. Note here that we can access the project id we can add a second argument to the object within the `push()` method and pass in the `params: { id: res.id }`

Here is the updated `handSubmit` function within the `NewProject` pattern:

![Screenshot from 2021-03-17 10-43-41](https://user-images.githubusercontent.com/73107656/111455399-a6575d00-870d-11eb-98de-62771c2963bb.png)


## Getting single project data and outputting it within ProjectDetails

First up we will alter the existing `getCollection` composable and create a `getDocument` composable to grab single projects using the project id.

The `getDocument` function takes in the `collection` and `project id` as arguments. Then we create a couple of `ref's` to save the document object and any errors.

Below that we use the firestore key and grab a reference for the document (project) and then we can add a firebase `onSnapshot()` real-time monitor to the document.  We save the returned value to a const `unsub`, so we can unsubscribe to the real-time `onSnapshot` when ever the component un-mounts.  This is used within the `watchEffect` function at the bottom of the module.  

Back to the `onSnapshot`: The first argument is a callback that takes in the `doc` and updates the ref `document.value` on every new snapshot.  This is done by reassigning a new object and spreading in the doc.data and the doc.id.

`document` is returned, now we can use the composable within the `ProjectDetails` component and extract the `document` data.

![Screenshot from 2021-03-17 11-57-05](https://user-images.githubusercontent.com/73107656/111468229-3c46b400-871d-11eb-8c0e-cb0bc5fd9b09.png)


## Deleting a project

We first need to check if a user is the owner of a project and if so show a delete button. We need to use the `getUser` composable to get the current `user.value.uid` and then compare to the `project.value.userId` which a is a property on the project object in firestore.

To do this we will use a computed property `ownership`. If `ownership` is true, then the user can see the delete button.

Once the button has been clicked we fire the `handleDelete` function that invokes the `deleteDoc()` function which is in the `useDocument` composable. Still within the `handleDelete` function we want to also delete the image from firebase storage and then redirect the user to the `Projects` view

The `deleteDoc()` logic will be placed within a new composable called `useDocument`:

![Screenshot from 2021-03-17 15-36-44](https://user-images.githubusercontent.com/73107656/111494691-986a0200-8736-11eb-922c-eaf012b3d56b.png)

We also need to add a `deleteImage()` function to the `useStorage` composable and then import, destruct and invoke `deleteImage()` within the `handleDelete()` function. Here is the `deleteImage` pattern:

![Screenshot from 2021-03-17 16-14-46](https://user-images.githubusercontent.com/73107656/111500438-e9302980-873b-11eb-8ef3-45ffb70e4641.png)

And now its time to pull it all together within the `handleDelete()` function within the `ProjectDetails` component:

![Screenshot from 2021-03-18 11-48-18](https://user-images.githubusercontent.com/73107656/111621394-da02b780-87df-11eb-99cb-842580111a90.png)





