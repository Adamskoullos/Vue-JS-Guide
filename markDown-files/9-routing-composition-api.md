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

Next Lets deal with the `Tag.vue` component, image below:

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


# Add a right hand side column showing all tags for easy navigation to view posts for specific tags

To do this we will add a component that will display the tags `TagPanel` on the right side column (1/4 page width) on the `Home` view, with the `PostList` component taking up (3/4 page width) from the left.  The `TagPanel` will also be shown on each `Tag.vue` page which is shown when the user clicks on a tag to filter posts.

To handle the logic the `TagPanel` will import a `useTags.js` composable.

The result will be that from either the `Home` or `Tag` views the user can navigate to filtered posts using the `TagPanel`.

1. Create `TagPanel` component (We will come back to develop this component)

2. `Home.vue` - Import `TagPanel` component, register within components and add it to the template. Next we pass the props `:posts="posts"` down so now the component has access to the `posts` array.

3. Accept `props: ['posts']` within `TagPanel`. Now we can use the array of posts to create an array of tags. We only want one of each tag within the array though. 

We will create a composable function to manage this logic.  Now we have the `posts` we can pass this in to our composable as a staring point.

4. Let create the composable `useTags.js` within the composables folder.

Tasks:

- Pass the posts into the function
- Create a new array of tags with only one of each tag. To do this we will cycle through and add each tag to a new set, which automatically excludes copies. We then spread the set into our new tags array, turning it back into an array. 
- Return the array to be used within the `TagPanel` component 

Lets build the `useTags.js` composable:

- Import  `{ ref }` from vue as we are using `posts` and `tags` which are `ref` values.
- Then create the `useTags` function expression with a const:

    1. Add the input parameter `posts` so we can access the argument when we use the function

    2. Create `const tags = ref([])` which will eventually be our tags array to be returned

    3. Create `const tagSet = new Set()` this is temporally while we extract the tags and is not being used outside the `setup()` function with the component so it does not need to be reactive.

    4. Write a `forEach` that cycles through the array of post objects and for each object cycles through the `tags` array.  Each tag is then added to the `tagSet`

    5. Spread the `tagSet` into the `tags` array

    6. Return `tags`

    7. Export the function `useTags`

5. Back in the `TagPanel` component import the `useTags` composable

6. We already have `props: ['posts']` so we can pass `props` into the `setup(props)` function.  Now we can pass `props.posts` into the `useTags` composable.

7. Destruct `useTags` passing in `props.posts`

8. Return `{ tags }` from the `setup()` function so we can work with it in the template

9. Now create the template, that cycles through and displays each tag as a link to its own `Tag.vue`:


10. Style - add style to the `TagPanel` component and also `Home` and `Tag` views for layout 

11. Add the `TagPanel` component to both the `Home` and `Tag` views and add grid styling to organise so they show within w right hand side column sharing the width with the `PostList` component:

- Import
- Add/register within components
- Add to template, below `PostList`
- Pass props down `:posts="posts"` into the `TagPanel` component 

Below pattern works for both `Home` and `Tag` views, this shows how the `TagPanel` component is used side by side with the `PostList` component:

![Screenshot from 2021-03-06 10-10-35](https://user-images.githubusercontent.com/73107656/110203124-3838ad80-7e64-11eb-96f4-f3a415c87044.png)

Next this is the index.js router:

![Screenshot from 2021-03-06 10-11-19](https://user-images.githubusercontent.com/73107656/110203146-4edf0480-7e64-11eb-95f1-e6a9a2072af0.png)

Then this is the `TagPanel` component:

![Screenshot from 2021-03-06 10-13-18](https://user-images.githubusercontent.com/73107656/110203195-96659080-7e64-11eb-9b29-52fd80dcf9e2.png)

And finally the `useTags` composable:

![Screenshot from 2021-03-06 10-14-00](https://user-images.githubusercontent.com/73107656/110203209-ae3d1480-7e64-11eb-94d6-9f29d7d705f3.png)