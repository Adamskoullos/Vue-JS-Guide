[Fetching data in the setup function](#Fetching-data-in-the-setup-function)<br>
[Composables - Composition functions](#Composables---Composition-functions)<br>
[Creating a Composable](#Creating-a-Composable)<br>
[Creating a Loading spinner](#Creating-a-Loading-spinner)<br>
[Making a web form](#Making-a-web-form)<br>
[POST request](#POST-request)<br>

----------------------------------------------------------------------

# Fetching data in the setup function
The below pattern includes:

- Async function
- fetch request
- try/catch blocks
- Error handling
- Loading time handling

There is a lot going on lets unpack it, but first here is the full pattern:

![Screenshot from 2021-03-04 12-10-01](https://user-images.githubusercontent.com/73107656/109961973-9047a680-7ce2-11eb-849b-7caef84109ab.png)

We are using json-server for a local host db.  

1. Using `ref()` define an empty `posts` array and an `error` with initial value of `null`.  I have also saved the endpoint in a short name `uri`.

2. Define a const `load` and assign it an `async` function

3. Within the function, structure `try`, `catch` blocks

4. define a let `data` and assign it the returned value of the await fetch request. 

5. Once the fetch request has returned something, the next line of code is run. The thread runs the `if` statement and throws an error if `!data.ok`. `ok` is a property that can be accessed here.

6. If all ok the `if` statement is skipped and the json data once turned into an object is returned and assigned as the value of the `posts` array.

7. We call `load()` within the `setup()` function above the return and then return the `posts` array and `error` to be accessible within the template.

Now just focusing on the template:

![Screenshot from 2021-03-04 12-25-25](https://user-images.githubusercontent.com/73107656/109963783-b5d5af80-7ce4-11eb-9850-cf96d2871a36.png)

8. We have a `v-if` to only display if there is an error

9. We have a div that displays the posts only if the `posts` array has a length of 1 or more

10. If `posts` does not have a length, we also have an `else` to display some kind or `loading` content

# Composables - Composition functions

Functions that are used and reused multiple times in different parts of a project can be externalised in their own file within a `composablse` folder. We can import the function file to use/invoke within a components `setup()` function.  

**Note**: The composable is defined within its own JS file, not a vue file.

Below we are going to transfer the logic from the above pattern to it's own file:

1. Create `composables` folder within `src`

2. Create `getPosts.js` file

3. Within the file, create the function expression `getPosts()` and we already have the logic from above.

However we need to make a few changes:

- We do not want to invoke the `load()` function as we will do that in the component that imports it
- We also need to return any data or functions that we want to have access to so we will add `load` as well
- We need to (at the top of the file) import `ref` 
- And lastly we need to export the function

**Note**: This is a really nice pattern that takes advantage of closure and really helps tidy up a components `setup()` function

This is the composable pattern:

![Screenshot from 2021-03-04 15-02-03](https://user-images.githubusercontent.com/73107656/109983300-99447200-7cfa-11eb-96d2-79e2f11627e3.png)
 
Now lets  import the function and use it within the `setup()` within the `Home` component.

1. Import the function 

2. Invoke the `getPosts()` function. Looking at the example above this function returns an object with three items `{ posts, error, load }` so we need to save the return value in order to have access. The pattern used below to do this is destructuring. Doing this allows us to directly use any of the returned values. Now the `load()` function definition is able to be invoked.

3. Once defined, we can invoke the `load()` function which gets the data and assigns it to the `posts` array

4. Then as normal the `setup()` returns any properties we want to have access to in the template, so `posts` and `error` are returned

![Screenshot from 2021-03-04 15-19-57](https://user-images.githubusercontent.com/73107656/109985855-1b359a80-7cfd-11eb-85ca-21680ceee80e.png)


# Creating a Composable

Create a view that shows the full body of a single post `SinglePost`.  We will need to set up the route, and fetch the single post. We will create a new composable function to fetch the single post. 

1. Create `SinglePost.vue` add the boiler plate

2. index.js - set up the route for the `SinglePost` view.  We include the `props: true` so that we can access the route parameter as a prop within the `SinglePost` component. 

![Screenshot from 2021-03-04 16-50-47](https://user-images.githubusercontent.com/73107656/109999097-c77d7e00-7d09-11eb-917d-210156736da2.png)

3. Now link to the `SinglePost` view from the `BlogPost` template which is nested within the `PostList` template which is displayed within the `Home` view.

We do this by wrapping the `title` element for each post with a `<router-link>` so they become links.  We add `:to` which includes the route `name` and maps the `params` key:

![Screenshot from 2021-03-04 17-08-09](https://user-images.githubusercontent.com/73107656/110001351-34921300-7d0c-11eb-90f7-2ceff586a9db.png)

4. Now accept the `id` props within the `SinglePost` view and pass `props` into the `setup()` function so we can access `id`:

![Screenshot from 2021-03-04 17-12-33](https://user-images.githubusercontent.com/73107656/110001978-d31e7400-7d0c-11eb-9845-29fcb4c010c9.png)


Now we have access to the `id` to be viewed, we need to create the composable that will fetch the single post and pull the function into the `setup()` function of our new `SinglePost` view.

5. Create the fetch single post composable `getPost`. We can reuse the same pattern as the fetch all posts composable so we will start with this and alter:

- The `posts` array is changed to `post` and turned from an empty array (as it's just a single post) to have an initial value of `null`
- We have access to the `id` within the `singlePost` component so we will pass it as an argument into the `getPost` function and add it on to the end of the end point to target the single post
- Then we just alter all ` posts` to just `post`

![Screenshot from 2021-03-05 06-57-31](https://user-images.githubusercontent.com/73107656/110078722-1108b000-7d80-11eb-8531-00e55af5614f.png)

Now its time to import the composable `getPost` into the `setup()` function within `SinglePost` and set up the template

6. Import `getPost`

7. Use destructuring and invoke `getPost` to return `post, error, load`

**Note**: `getPost` takes an argument  which gets added as the post id within the endpoint, so we need to pass in the `props.id` which we have access to

8. Invoke `load()` which makes the fetch request and adds the post value to `post`

9. return `post, error` from the `setup()` function so we can use within the template

10. Use dot.notation to access and display each part of the post:

- The first div `v-if` shows if there is an error and displays the error
- the next div `v-if` displays the post content if there is a post
- The `else` div shows while the post content is loading (we will work with this next)

![Screenshot from 2021-03-05 07-32-56](https://user-images.githubusercontent.com/73107656/110082256-03a1f480-7d85-11eb-9858-731f774282d1.png)


# Creating a Loading spinner

# Making a web form

# POST request