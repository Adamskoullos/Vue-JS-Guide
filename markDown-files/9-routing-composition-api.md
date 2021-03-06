[Router-Composition-API](#Router-Composition-API)<br>
[]()<br>
[]()<br>
[]()<br>
[]()<br>


# Router-Composition-API

## useRouter

1. Using the Vue router with the composition api we first need to import `useRouter` function within the component it will be used in.

2. To use the router within the `setup()` function we then need to invoke `useRouter()` and save the return value to a new const which we will use when we want to use the router thereafter:

The below example shows the pattern to `import` the vue-router, save the router to a const and call the router using the built in `push` method to redirect the user back to the main blog page after they submit their new post:

![Screenshot from 2021-03-05 15-16-36](https://user-images.githubusercontent.com/73107656/110134888-cad63f80-7dc5-11eb-9f75-44e41421e4c1.png)

## useRoute

We  can also import and use `useRoute`, this is not the router itself but gives us access to many properties about the current route we are on.  

After importing, we need to save to a const: `const route = useRoute()`

Then we can use `route` to access the properties and grab a routes params: `route.params.id`. This is useful if we do not have access to the route params via the props.

We originally passed the `props` into the `setup()` function to access `id` within the getPost function, in order to add the post id onto the end of the endpoint.

Below is an example where we alter this and use the `route.params.id` instead.  Note we also import the `useRoute` from `vue-router`:

![Screenshot from 2021-03-05 16-27-52](https://user-images.githubusercontent.com/73107656/110143990-c020a800-7dcf-11eb-9117-b43625febc3a.png)


# Create a Tag view that filters and displays only posts with the clicked tag 

**Tasks:**

1. Create `Tag.vue`

2. Create the route in index.js using `/tags/:tag`

3. fetch request to grab all posts

4. Build a computed property to filter just posts with the tag

5. Use the  `useRoute` to access the tag route parameter

6. Use the `PostList` component to output the required posts (passing down the computed property `filteredPosts`)

7. Show `spinner` while data is loading and `error` if there is an error


First this is the index.js route for `Tag.vue`:

![Screenshot from 2021-03-05 18-03-47](https://user-images.githubusercontent.com/73107656/110155167-252eca80-7ddd-11eb-940d-1b964874d544.png)

Then this is the `router-link` pattern turning the `#tags` into individual links, to a route path ending with each specific tag:

![Screenshot from 2021-03-05 18-04-34](https://user-images.githubusercontent.com/73107656/110155244-41cb0280-7ddd-11eb-91f0-95b0450649b7.png)

**Note**: Above - The `v-for` is placed within the `router-link` instead of the `span` tag, this is so each tag becomes an individual link. 

Now each tag is routed to its own path.

Next Lets deal with the `Tag.vue` component:

Starting at the top, the template uses the same pattern as the `Home` blog page with some minor changes. We are showing the `error` if there is one, we are reusing the `Spinner` while loading and we are reusing the `PostList` component which uses the `BlogPost` component template for each post to be displayed.

The difference is that we are changing the props that are being passed down into `PostList`, We are passing down the computed property `filteredPosts`.  This is how we can reuse the component.

Moving on down from there we are importing the `getPosts` composable to use in the `setup()` function, the `Spinner` and `PostList` components that we use in the template.  We also import `{ useRoute }` to access route parameter properties and `{ computed }`, both from Vue.

Moving down to the script tags, we need to register the components we have imported, `PostList` and `Spinner`. Now we can use them within the template.

Inside the `setup()` function we invoke the `useRoute()` function and save the returned object to a const.

We then invoke `getPosts()` and destruct data and functions.

Then we invoke the `load()` function grabbing the data

We then create the `filteredPosts` computed property and return posts that have the chosen tag. 

**Note**: We use the `useRoute` to access the route parameter here and use this value within the `filter()` function.  So when a tag is clicked and the user is routed to a view with the tag being added to the end of the route, the `filteredPosts` only adds posts with that tag to the array to be displayed.  We can do this as we gave each tag the route params of `:tag` in index.js, and then mapped the tag to `:tag` within the `router-link` `params:{ tag: tag }` for each tag within the `BlogPost` component.  

And finally we return any data and functions we want to use within the template:
 
![Screenshot from 2021-03-05 19-49-21](https://user-images.githubusercontent.com/73107656/110166187-e5bbaa80-7deb-11eb-9ceb-9922df554cc3.png)
