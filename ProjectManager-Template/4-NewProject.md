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

2. Import and destruct the `getUser()` composable to extract the `user`

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

![Screenshot from 2021-03-16 10-08-34](https://user-images.githubusercontent.com/73107656/111291926-940eed80-863f-11eb-99c4-0d2c4575f842.png)

## Implement composable within NewProject component

Now we will import the `useStorage.js` composable into the `NewProject` view and trigger `uploadImage()` when the the form is submitted:

1. Import composable

2. Destruct `useStorage()`

3. Create `handleSubmit()` function, return and use within the form

So now we have both the `handleChange()` function adding an image file and the `handleSubmit()` function uploading the image to firebase storage.  We need to complete the logic so the new project is added to the firestore `projects` db.

## Posting new project object to firestore

We now need to import some composables to `NewProject` so we can use their data and functions to complete the logic needed to post a new project to firestore:

- `useCollection` so we can add a new document to the collection
- `getUser` so we can grab the current user
- `timestamp` so we can add a `createdAt` property to the new document

Now its time to destruct the above and build out the `handleSubmit` logic to add a new project to the db.  We also add a local `isPendingLocal` boolean to show a loading button whilst the new doc is being added to the db.  We still need to add the router and redirect to the projects or project edit view but we will come back to this, here is the pattern for the `NewProject` view for now:

![Screenshot from 2021-03-16 15-56-00](https://user-images.githubusercontent.com/73107656/111339984-1dd6af00-8670-11eb-8507-eb605ad6a288.png)
![Screenshot from 2021-03-16 15-56-39](https://user-images.githubusercontent.com/73107656/111340089-347d0600-8670-11eb-9c06-49743db2fab1.png)
![Screenshot from 2021-03-16 15-57-03](https://user-images.githubusercontent.com/73107656/111340133-42cb2200-8670-11eb-9d41-86759ca19a88.png)







