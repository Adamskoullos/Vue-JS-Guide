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



