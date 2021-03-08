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



