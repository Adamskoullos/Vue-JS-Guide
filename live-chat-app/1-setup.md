# Project Overview

Below is the component architecture of the project:

There are two main views:

1. `Welcome.view` (home) this will have two further nested components, `login` component and `sign-up` component 
2. `chatroom.vue` (the main view) will have two nested components, `chatWindow` and `newChatForm`
- The `navbar` will also be a separate component

![Screenshot from 2021-03-08 09-50-29](https://user-images.githubusercontent.com/73107656/110304741-d73fdf80-7ff3-11eb-9743-f2e32c55b9e0.png)

# Project and Firebase Set-up

1. Open a terminal and cd into the directory the new project will be located

2. `vue create projectName` and go through the options

3. cd into the new project directory and open in vscode `code .`

4. Work down the folder structure removing any boilerplate not used

5. Add a home view component, which is called `Welcome` and give it some basic html

6. Create the `route` for the `Welcome` view in `index.js`, making sure to import the component

We now have the home page set up and routed, fire up the server and prove we are up and running. `npm run serve`

7. Add a `main.css` file within assets, for global styles

8. Import `main.css` into `main.js`, now we have access to the styles on all components. 

9. Time to connect to firebase:

We will be using `firestore` and `authentication` within the project. We will reuse an existing firebase project to model the process of using the same backend for multiple front end apps.

- Open the firebase console and open the firebase project `vue-Firebase` in this case.  Add a new `web app` to this project:
    - Will call it `live-chat`
    - Add firebase hosting
    - register the app

Leave setting up hosting for later and go back to the console and click on the `live-chat` app settings cog.

10. Scroll down the the `web apps` section, firebase SDK snippet, and grab the `config` code

11. Create a new folder within `src` called `firebase` and within that a new file called `config.js` and paste the config snippet into the file

**Note**: At this point we need to install firebase before we can import it within the `config.js` file `npm install firebase`

12. Import firebase and any services (firestore) at the top of the `config.js` file. 

13. Below the SDK snippet initialise firebase 

14. Next invoke firebase firestore and save the returned function to a const `fStore`

15. Then invoke firebase serverTimestamp and save the returned function to a const `timeStamp`

16. Lastly: `export { fStore, timeStamp }`

I have omitted the actual SDK but the pattern is modelled:  

![Screenshot from 2021-03-08 11-55-24](https://user-images.githubusercontent.com/73107656/110318285-365a2000-8005-11eb-9d5c-05585b647f71.png)

