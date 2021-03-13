# Project Overview

The project is a template to create and manage projects, with each project having its own task list.  The overall component architecture will be similar to this:

![Screenshot from 2021-03-13 02-37-01](https://user-images.githubusercontent.com/73107656/111017830-86423980-83ad-11eb-971e-3e4e89a75c15.png)

# Set-Up

1. Create vue project

2. Strip unused boilerplate 

3. Structure the `App.vue` template:

![Screenshot from 2021-03-13 03-30-50](https://user-images.githubusercontent.com/73107656/111017624-99083e80-83ac-11eb-8ae1-682848f99d32.png)

4. Fire up the server: `npm run serve`

5. Global Styles:

- assets > `main.css`
- Google Font:
    - Choose Google font and weights
    - Import > (copy code)
    - Paste it to the top of the `main.css` file

- Variables
- Base Styles
- Buttons
- Forms
- Errors

Example:

![Screenshot from 2021-03-13 04-02-55](https://user-images.githubusercontent.com/73107656/111018499-04eca600-83b1-11eb-805e-660d51bc6056.png)

6. Import `main.css` into `main.js`:

![Screenshot from 2021-03-13 04-08-43](https://user-images.githubusercontent.com/73107656/111018627-d1f6e200-83b1-11eb-897e-b9c4948b3383.png)

7. `index.html` within public: Add `en` to language as it is blank by default

8. Make initial commit


# Set-Up Firebase Project

## Set up the back end:

1. Create new firebase project

2. Cloud Firestore: create database and start in `test mode` > enable

3. Enable log in authentication methods (email and password, Google)

## Set up the front end

1. Install firebase tools, is the first time using them on the machine. This is saved to the machine globally and only needs to be installed once (not for each project)

2. Initialise firebase `firebase init`:

![Screenshot from 2021-03-13 04-40-23](https://user-images.githubusercontent.com/73107656/111019359-9ad6ff80-83b6-11eb-9b70-3eda9f8ceaff.png)

- Use `firestore.rules`
- Use `dist` as the public directory (if using Vue)

![Screenshot from 2021-03-13 04-47-22](https://user-images.githubusercontent.com/73107656/111019451-3e281480-83b7-11eb-8ec7-ca01603ca48a.png)


# Connecting the front end to firebase