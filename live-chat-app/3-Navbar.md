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

