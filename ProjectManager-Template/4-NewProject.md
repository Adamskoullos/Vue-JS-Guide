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

`projectImages/${user.value.uid}/${file.name}`

project-cover is the main folder, then `userId` is the folder for each user then the file name is the image.

### Setting up storage

1. Import firebase storage within the `config.js` file

2. Initialise firebase storage within the `config.js` file

3. Add to the exported object

![Screenshot from 2021-03-15 15-56-20](https://user-images.githubusercontent.com/73107656/111182642-01227480-85a7-11eb-857c-7060a1f98ccc.png)


## Uploading images

Once an image has been chosen the `Add new project` button has been clicked one of the events we need to trigger is the uploading of the image to the firebase storage folder.  The logic for this is structured within a `useStorage.js` composable.

1. Import `ref()` from vue and `fStorage` from `config.js`

2. Destruct the `getUser()` composable to extract the `user`

3. Create `useStorage()` function which will be returned.  This function will return: `uploadImage()` function, `error` property and the returned `url` to the file within firebase storage

Lets step through `useStorage()`:

- Create refs for: `error`, `url` this is the returned public url from firebase so we can access the image, `filePath` this is where we are saving the file within firebase storage.

- Next we create the async `uploadImage()` function which takes in the `file` to be uploaded.  Within the function we:
    - Set the `filePath` value dynamically to the current users folder within the projects folder so we have a reference to this path
    - We then create a storage ref which accesses firebase storage and passes in the path

Once we have these saved we can add `try`, `catch` blocks:

**try**: Create a const for the `res` and add the await keyword before invoking the file upload firebase function. The returned object saved to `res` includes a firebase method that can access the public url for the uploaded file. We then invoke this method on the returned `res` object and save the public url to `url.value`

**catch**: This is the normal pattern

`useStorage` returns all `ref` properties and the `uploadImage()` function and then `useStorage()` is exported to be used within components:

![Screenshot from 2021-03-16 06-17-47](https://user-images.githubusercontent.com/73107656/111264398-57cb9500-861f-11eb-941c-e70661abf37c.png)

