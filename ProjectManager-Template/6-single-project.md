# Initial set-up

Create the view component `ProjectDetails`, import the view into the `index.js` router and then wrap each project within the `ProjectsList` component with a `router-link` using the project id params.

First here is the route using `:id` params:

![Screenshot from 2021-03-17 07-40-06](https://user-images.githubusercontent.com/73107656/111431722-080acd80-86f4-11eb-8027-4b19874de8aa.png)


Then this is the template for the `ProjectsList` component showing how each project is wrapped within a router-link. Note the `:to` pattern which includes the params:

![Screenshot from 2021-03-17 07-41-58](https://user-images.githubusercontent.com/73107656/111431906-43a59780-86f4-11eb-983c-79986b34800d.png)
