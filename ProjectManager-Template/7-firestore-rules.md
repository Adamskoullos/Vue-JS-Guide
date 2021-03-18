# Managing user access

Firebase provides provisions for rules to be located server side to manage user access.  The `match` statements target specific folders and files and can use curly braces, called wildcards.  Curly braces signifies 'all paths from here' and what ever is used within the curly braces can be used within the the `allow` statements.  

## Firestore rules

This section covers rules within the `firestore.rules` file that do the following:

1. Allow logged in users to read all projects and create projects

`allow read,create: if request.auth != null;`

2. Allow users to update and delete projects that they have created. This rule checks if the logged in user id matches the user id of the project document
 
`allow delete, update: if request.auth.uid == resource.data.userId;`

![Screenshot from 2021-03-18 06-21-02](https://user-images.githubusercontent.com/73107656/111582017-20d9b880-87b2-11eb-96fe-1aa4b16b2a05.png)

Now we have updated the rules on the front end we need to deploy them to firebase to update the rules on the backend where they actually function.  We do this in the terminal:

`firebase deploy --only firestore:rules`


## Storage rules

As we have both firestore for project documents, we also have firebase storage for other file types which we are using for images. We need to also add `storage.rules` to prevent users from deleting images from other users projects.

1. Allow logged in users to read all users images and create their own

`allow read, create: if request.auth != null;`

2. Allow users to delete their own images/document

`allow delete: if request.auth.uid == userId;`

![Screenshot from 2021-03-18 06-48-38](https://user-images.githubusercontent.com/73107656/111584609-fb4eae00-87b5-11eb-89d1-431cf42121db.png)

Then we as above, deploy to firebase:

`firebase deploy --only storage:rules`


