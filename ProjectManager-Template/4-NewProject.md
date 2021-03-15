# New project view set-up

1. Create `projects` folder within `views` folder.  Create `NewProject.vue` view and add the the view to the router

![Screenshot from 2021-03-15 12-30-07](https://user-images.githubusercontent.com/73107656/111153705-3076b880-858a-11eb-8da4-4d392db4f44a.png)

2. Add a `router-link` for `NewProject` within the `Navbar` component to show if user logged in

![Screenshot from 2021-03-15 12-35-14](https://user-images.githubusercontent.com/73107656/111154231-e7733400-858a-11eb-8be8-1c52cc7b8b5f.png)

3. Build out the `NewProject` view

![Screenshot from 2021-03-15 12-36-02](https://user-images.githubusercontent.com/73107656/111154320-040f6c00-858b-11eb-9c19-ead1ef366d91.png)

# Handling file changes 

This section covers file uploads, firebase storage and resizing and displaying images.  These patterns will be used to manage project cover images and later to capture code solutions to bugs.

The `NewProject.vue` view below is not yet a complete pattern but there are some interesting points to note at this stage.
The file upload input has the @click `handleChange()` function which grabs the file, checks if the file type is jpeg or png and if so assigns the file as the value to a ref.  This is so we can use the ref to add the file to firebase storage, which we can then use within our templates.

![Screenshot from 2021-03-15 15-37-59](https://user-images.githubusercontent.com/73107656/111179919-6e80d600-85a4-11eb-87e6-04d8730a2427.png)

## Firebase Storage

Firebase storage can store:

- Documents
- Jpegs and PNGs
- Movies
- MP3s

1. Create a file path: `const path = 'folderName'`

2. Make a firebase storage reference: `const ref = fStorage.ref(path)`

3. Upload the file to the `ref` using `put()`: `ref.put(file)`

So in this project the path will look like this:

`project-cover / { userId } / { file-name }`

project-cover is the main folder, then `userId` is the folder for each user then the file name is the image.

### Setting up storage

1. Import firebase storage within the `config.js` file

2. Initialise firebase storage within the `config.js` file

3. Add to the exported object

![Screenshot from 2021-03-15 15-56-20](https://user-images.githubusercontent.com/73107656/111182642-01227480-85a7-11eb-857c-7060a1f98ccc.png)

