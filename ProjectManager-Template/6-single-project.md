# Initial set-up

Create the view component `ProjectDetails`, import the view into the `index.js` router and then wrap each project within the `ProjectsList` component with a `router-link` using the project id params.

First here is the route using `:id` params:

![Screenshot from 2021-03-17 07-49-08](https://user-images.githubusercontent.com/73107656/111432699-45238f80-86f5-11eb-8e6d-3ff90a16efdf.png)

`props: true` is added so we can accept the props within the `ProjectDetails` component and access the project id:

![Screenshot from 2021-03-17 07-52-20](https://user-images.githubusercontent.com/73107656/111433074-b6634280-86f5-11eb-957a-29906ae9e9e0.png)

Now we have access the project `id` within `ProjectDetails` so we can now make a request to firebase to grab the project information.


Then this is the template for the `ProjectsList` component showing how each project is wrapped within a router-link. Note the `:to` pattern which includes the params:

![Screenshot from 2021-03-17 07-54-16](https://user-images.githubusercontent.com/73107656/111433268-fb877480-86f5-11eb-8dd5-4b79987baaad.png)
