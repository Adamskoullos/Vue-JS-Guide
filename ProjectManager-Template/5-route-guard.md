# Preventing none user access

Should uses attempt to access user views, the route guard redirects non-users to the home page where they can login or sign up. 

This pattern is added above the `routes` object within `index.js` and then used on the relevant routes. We first import `fAuth` (firebase authentication) to grab the current user, if there is one.  If user = null, they are redirected to the login view, if they are logged in they are forwarded on to their destination.

**Note**: This route guard function pattern includes three arguments: `to`, `from` and `next`.  Then rather than use the vue-router to push, we use `next()`:

![Screenshot from 2021-03-17 06-04-42](https://user-images.githubusercontent.com/73107656/111422487-aee86d00-86e6-11eb-92c8-164887047889.png)



