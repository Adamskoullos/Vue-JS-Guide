# Setting up a Vue project
First make sure to have the latest version of Node and NPM installed. For debian linux users install NVM to do this and manage versions. A guide for this is [here](https://gist.github.com/SriVinayA/56335800e19a508c97bfa4f980a870cf)
Then install the Vue CLI, note sudo is only for linux to command as admin:

```
sudo npm install -g @vue/cli

```
confirm Vue is correctly installed by checking the version:

```
vue --version

```
At this point Node, NPM and Vue is ready to go.

We use the Vue CLI to install all the components and dependencies that make up a core Vue project.  To do this we:

1. Open up a terminal, this can be from the vs code terminal
2. Navigate into the directory the new project folder will be located within
3. From there create a new Vue project with the following command (I am using linux, check for windows and mac):

```
vue create projectName

```
4. Then cd into the new project directory

```
cd projectName

```
From here use the command: `code .` to open project in vs code if not already open.  Or open vs code and open new folder and go to folder location.  

First thing to do is ush local repo to GitHub and publish. From there work as normal.

# Grabbing elements to work on
When working with templates in Vue projects, we do not use querySelector, instead we use the Vue ref attribute and give elements a ref name:

![Screenshot from 2021-02-23 10-46-50](https://user-images.githubusercontent.com/73107656/108833379-a6f44c00-75c4-11eb-800e-4bfdfb9bb8b9.png)

So we grab an element using the ref attribute and then we reference the element to work on it by using the following syntax(as shown above):

```
$refs.name

```