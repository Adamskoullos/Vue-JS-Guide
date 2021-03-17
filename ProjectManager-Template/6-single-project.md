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



