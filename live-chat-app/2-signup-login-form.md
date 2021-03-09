# Sign-up and Login Forms

The `Signup.vue` and `Login.vue` components will be nested within the `Welcome.vue` home page.

1. Create `Signup.vue` within components folder and add the following:

- Template: `form` with three `inputs` for `name`, `email` and `password`. All to be required and also have a `v-model` for two way data binding.  
Below that but within the form a submit button.  The form tags to have an `@click` event listener. 

- script: `Setup()` to include refs for the above inputs, the submit function and also return all data properties and the submit function.

The basic pattern below:

![Screenshot from 2021-03-08 13-48-52](https://user-images.githubusercontent.com/73107656/110330040-35c98580-8015-11eb-8ee8-4e09c949f43b.png)

2. As above for the `Login.vue`, we can reuse the same pattern and alter to suit:

![Screenshot from 2021-03-08 13-51-43](https://user-images.githubusercontent.com/73107656/110330213-6dd0c880-8015-11eb-92f9-057fdfd776c0.png)

The components are in place we will come back for the logic.  Next lets add them to the `Welcome.vue` component:

3. Import both components into `Welcome`, add them to the `components` object and add component tags within the template:

![Screenshot from 2021-03-08 14-11-10](https://user-images.githubusercontent.com/73107656/110332362-24ce4380-8018-11eb-98bf-b95bb04b3159.png)

Now we have both forms nested and displaying on the `welcome` view. We need to set them up so only one form shows at a time depending on if the user wants to login or sign-up:

4. Wrap each components tag within a div, one with `v-if` and the other `v-else`.  We want the `Login` form to show as a default so we use the `v-if` on this one.  The way we toggle forms is using a `ref` value within the `setup()` function that has a boolean value, initially true.
we then place an `@click` on the `<span>` tag which toggles the boolean from true to false and vice versa: 

![Screenshot from 2021-03-08 15-19-05](https://user-images.githubusercontent.com/73107656/110340871-a5457200-8021-11eb-9d12-c87de98e2130.png)


# Firebase Authentication

 ## Set-up

 Go to firebase console, get into the specific project > Authentication:

 1. Enable any sign in methods

 `config.js`:

 2. `import firebase/auth`

 3. Initialise the authentication service: `const fAuth = firebase.auth()`

 4. Add `fAuth` to the exported object

![Screenshot from 2021-03-09 06-25-18](https://user-images.githubusercontent.com/73107656/110427836-3c510f00-80a0-11eb-8c53-ec39a8fbeccb.png) 


# Signup Composable

1. Create `composables` folder and add `useSignup.js` file

Within `useSignup.js` from a module perspective we will have a `signup` function that includes the logic and a `useSignup` function that returns the `signup` function.  The `useSignup` function is the function that is exported.  This means that the actual sign up logic is only saved in one place, in the `useSignup.js` composable.  When the exported `useSignup` function is invoked it returns the `signup` function and the `error` property.

2. Create the `useSignup` composable:

- Create a const `error` ref, pressing enter and auto importing `ref` from vue:

![Screenshot from 2021-03-09 07-43-47](https://user-images.githubusercontent.com/73107656/110435678-357bc980-80ab-11eb-8f1d-1b1b5b22cd34.png)

- Create the async `signup` function and start with `try`. Using `fAuth` and the firebase create user method.  Add an `if` first to to catch an error if there is no response, then add an `await` to update user name when the `res` is returned.  Then we return the `res` so we can use it later.  At the end of the `try`, we add a `catch`:

![Screenshot from 2021-03-09 07-44-44](https://user-images.githubusercontent.com/73107656/110435774-53e1c500-80ab-11eb-93e5-1682ee53d88b.png)

- Below the `signup` function create the `useSignup` function that has the sole job of returning the `error` property and `signup` function. Then finally we export the `useSignup` function.:

![Screenshot from 2021-03-09 07-45-14](https://user-images.githubusercontent.com/73107656/110435832-678d2b80-80ab-11eb-8fc9-f5891e80494c.png)

Here is the full pattern:

![Screenshot from 2021-03-09 07-46-24](https://user-images.githubusercontent.com/73107656/110435962-8f7c8f00-80ab-11eb-8de3-37d29ebaf6f6.png)


# Outputting Errors



