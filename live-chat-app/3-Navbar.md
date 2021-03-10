# Navbar Setup

The navbar will display the users display name, their email and a button to log out. This will be displayed within the `Chatroom` view.

1. Create `Navbar.vue` component within components folder and set up the template. To be altered for dynamic data later

![Screenshot from 2021-03-10 06-15-27](https://user-images.githubusercontent.com/73107656/110584998-08d9b780-8168-11eb-973e-c02e887de996.png)

2. Add the component to the `Chatroom` view

- Add the the `Navbar` tag within the `container` div at the top
- Import the `Navbar` component
- Add `Navbar` to the components property

![Screenshot from 2021-03-10 06-18-44](https://user-images.githubusercontent.com/73107656/110585267-7ab20100-8168-11eb-8f27-bd9d0a7c85ec.png)

![Screenshot from 2021-03-10 06-19-17](https://user-images.githubusercontent.com/73107656/110585344-90272b00-8168-11eb-9ffb-942161d25cde.png)


# Logging users out

1. Create `logout.js` composable to handle the logic

- Import `ref` and `fAuth` and set any error.value to null
- Set up the `logout` function using async, first set error to null then add `try` and `catch` blocks. Within the `try` use await and log the user out with firebase `fAuth.signOut()` method
- Create the `useLogout()` function to return `error` and `logout()` 
- Export `useLogout`

![Screenshot from 2021-03-10 07-06-12](https://user-images.githubusercontent.com/73107656/110590005-1ba3ba80-816f-11eb-91d1-534345bbc4a1.png)

2. Add the `useLogout.js` composable to the `Navbar` component:

- Import `useLogout`
- Create the `setup()` function and within:
- Destruct `useLogout()` 
- Create the `handleLogout` `async` function and inside:
- Invoke `logout()` with an `await`
- Return `handleLogout` from the `setup()` function so it can be used within the template
- Add the click event to the logout button using the `handleLogout` callback

This is the pattern so far:

![Screenshot from 2021-03-10 07-16-36](https://user-images.githubusercontent.com/73107656/110591113-90c3bf80-8170-11eb-9d26-88978d62cc9e.png)


# Displaying user and email within the navbar

Using firebase we can easily grab the current users `displayName` and `email` and then present this data dynamically within the navbar.  We will use a composable to handle this logic, `getUser.js`. 

**getUser.js**:

1. Create `getUser.js` composable and import `ref` and `fAuth`

2. Create a `const user = ref(`fAuth.currentUser`)`, So if the user is already logged in the value is the user object and if not logged in the value will be `null` as default

Then every time there is a state change, the value is updated from the logic below:

3. Create a firebase built in listener for `user authentication state change` and define the callback.  The callback takes an input which is the `_user`.  This value is `null` if the user is not logged in and if the user is logged in the value will be the user object:

    - Set the `user.value` to the value of `_user`

4. Create the `getUser()` function that solely returns the `{ user }` **object**

5. `Export default getUser`

![Screenshot from 2021-03-10 10-48-33](https://user-images.githubusercontent.com/73107656/110617976-2e79b780-818e-11eb-98e7-93ffb91cb586.png)


# Route Auth Guard

An authentication guard is a function that is defined within the router (index.js) or a composable and can be used within the routes. An auth guard becomes a middle man and undertakes user checks before running some code and finally routing the user to the destination view.

In this case the auth guard checks if the user is logged in and if so routes them through to the `Chatroom` view, if the user is not logged in they are routed back to the `Welcome` view where they can login or sign up.

**index.js - Router**:

1. Import `fAuth`

2. Define the function expression for the auth guard logic

3. Add the function as the value to a `beforeEnter` property within the route

![Screenshot from 2021-03-10 13-38-36](https://user-images.githubusercontent.com/73107656/110638065-039b5d80-81a6-11eb-8bda-07fd132fdc67.png)


# Waiting for firebase auth before we initialise on a page reload

If the user is logged in but decides to use the history tabs to navigate or refreshes their browser the app will not reload and force the user to sign in again. To do this we make some adjustments to the `main.js` file so firebase checks for user before the app is loaded.  If the user is logged in already the app will not reload and the user can directly access the `Chatroom` and not be redirected to the `Welcome` view: 

**main.js**:

1. import `fAuth` from firebase/config.js

2. Create a `let app` which is initially `null`

3. wrap the Vue `create(app)` within an `if` to run only if `app` is `null`, then wrap the whole lot within a function that triggers when firebase authentication state first changes.  The function runs and firebase checks if the user is currently logged in or not.  If the user is already logged in the code inside the `if` will not re run, as the Vue app has already loaded, however if the user is not already logged in the Vue app will load.

![Screenshot from 2021-03-10 14-32-24](https://user-images.githubusercontent.com/73107656/110644886-71975300-81ad-11eb-9019-375b5aff7b89.png)


# Redirecting users to the Welcome view when logged out

The example below piggy backs onto the end of the `logout()` function using an `await` within the `Navbar` component and includes:

- importing the router and saving it to a const
- creating an `await` after the `logout()` function using the `router.push()` to redirect back to the `Welcome` view

![Screenshot from 2021-03-10 14-43-15](https://user-images.githubusercontent.com/73107656/110646614-f6cf3780-81ae-11eb-86bb-31a32361ddff.png)
 
This second example uses the firebase built in `watch()` method.  The logic is placed within the `Chatroom` `setup()` function.  The `watch()` method takes in the current `user` which we get from the `getUser()` function when we destruct it.  If the user is not logged in the `user.value` is `null` and if this is the case we want to redirect to the `Welcome` view.  we need to use `user.value` as user is a `ref` within the `getUser.js` composable.

Here is the pattern:

![Screenshot from 2021-03-10 16-06-54](https://user-images.githubusercontent.com/73107656/110659621-a52caa00-81ba-11eb-8e32-8db26bf1358d.png)


 


