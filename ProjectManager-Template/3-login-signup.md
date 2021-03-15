# Login

1. Create `auth` folder within `views` folder and create the `Login.vue` view

![Screenshot from 2021-03-14 04-52-27](https://user-images.githubusercontent.com/73107656/111057660-1a310580-8481-11eb-9d47-23b35403bd43.png)

2. Add `Login.vue` to the router

![Screenshot from 2021-03-14 04-31-58](https://user-images.githubusercontent.com/73107656/111057301-3da68100-847e-11eb-95b9-3806c8d172f0.png)

3. Adding a `pending` state to requests

This is to let the user know something is happening while they are waiting to be logged in, once they have hit the login button.  The code below uses a boolean to toggle between a `login` button and a `loading...` button depending on the current state.

First the composable that defines the property `isPending` and toggles its state depending on if the user is waiting for the server to log the user in:

![Screenshot from 2021-03-15 01-47-04](https://user-images.githubusercontent.com/73107656/111093255-5bccb980-8530-11eb-9949-90370dea18c8.png)

Then this is the login component, the `isProperty` is extracted, returned from the `setup()` function and then used within the `v-if` on the buttons:

![Screenshot from 2021-03-15 01-52-38](https://user-images.githubusercontent.com/73107656/111093546-21afe780-8531-11eb-9e51-8e438be7b1e5.png)


# Signup

Create a `Signup.vue` view, add to the `router` and set up `Signup.vue` file using the `useSignup` composable:

![Screenshot from 2021-03-15 02-53-45](https://user-images.githubusercontent.com/73107656/111097545-abfc4980-8539-11eb-9d40-556a32367aa3.png)

![Screenshot from 2021-03-15 02-54-45](https://user-images.githubusercontent.com/73107656/111097633-cfbf8f80-8539-11eb-835b-e4b60f2624ef.png)

![Screenshot from 2021-03-15 02-50-52](https://user-images.githubusercontent.com/73107656/111097360-45772b80-8539-11eb-8697-6844be7f3672.png)




