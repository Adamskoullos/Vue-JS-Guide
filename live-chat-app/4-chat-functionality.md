# New Chat Form

1. Create `NewChatForm.vue` within the components folder

2. Import the the component into the `Chatroom` view and place within the template container

3. Create `useCollection.js` composable to manage the logic of posting the new message to firestore.  

4. Destruct `useCollection.js` composable within `NewChatForm` `setup()` function and return the `addDoc()` function and `error` property.

**Note**: To maintain reusability of the `useCollection.js` composable we are passing arguments:

- `useCollection('messages')` as the collection to add the document to
- `addDoc(chat)` as the document to be added to the collection

Patterns:

![Screenshot from 2021-03-11 07-54-51](https://user-images.githubusercontent.com/73107656/110753927-144be200-823f-11eb-96ba-c539826157df.png)

![Screenshot from 2021-03-11 07-56-16](https://user-images.githubusercontent.com/73107656/110754065-452c1700-823f-11eb-98f7-3012d47054f4.png)

![Screenshot from 2021-03-11 07-56-52](https://user-images.githubusercontent.com/73107656/110754124-5a08aa80-823f-11eb-8b76-034dc4896847.png)

# Adding new messages to the Chatroom

To do this we need to set up a realtime watch on the firebase `messages` collection and trigger an update to the displayed messages array when new messages are added.  We then need to set up the `ChatWindow` component to display all messages within the Chatroom.  To do this we will create a separate composable for the real-time messages logic which will be imported into a `ChatWindow` component to house the chat messages within the `Chatroom` view. 

The logic to monitor the messages collection and update the messages array that will be displayed within the Chatroom is extracted in to the `getCollection.js` composable.  We first grab the collection, order it by the `createdAt` property and attach the firebase `onSnapshot()` method.  This watches the collection for any updates in real-time and takes two arguments:

1. The callback to be run if the update is successful

2. The callback to be run if there is an error

Lets step through the `getCollections.js` composable:

- define `getCollection()` function passing in the `collection` parameter
- Define two refs, `documents` to eventually be returned as an array of message objects and `error`
- Grab the ordered messages collection from firestore and save to a const `collectionRef` 
- Add an `onSnapshot()` real-time watcher to `collectionRef`
- For every successful update, fire the first callback which cycles through each message object and:
    - checks the `doc` has a firestore `createdAt` property and then if so:
    - creates an object for each doc spreading in the doc.data and adding the doc.id

**Note**: The reason for the `createdAt` check is to ensure the snapshot `timestamp` is from firestore and not locally created.

**Note**: When we use the `onSnapshot()` function, we are subscribing to real-time monitoring, This does not automatically stop when the component un mounts.  This means that every time the user logs in a new `onSnapshot` is added.  therefore we need to unsubscribe each time the user logs out or the component un mounts.  To do this we add a const `unsub` to the beginning of the `onSnapshot()` function, turning it into a function expression and then call `unsub()` every time the component un mounts using the Vue `watchEffect` method.  The pattern for this is the bottom of the `getCollection` function:   
 
![Screenshot from 2021-03-11 16-55-43](https://user-images.githubusercontent.com/73107656/110824089-a1685880-828a-11eb-88a5-8abe00250fd7.png)

Now we can import the `getCollection.js` composable into the `ChatWindow` component and work with the `documents` array.  There a few processes to be done within the `setup()` function:

1. Import `getCollection` and destruct, extracting `documents` and `error`, passing in the collection as a string.

2. Install `date-fns`: `npm install date-fns` so we can manipulate the timestamp data

3. Import `formatDistanceToNow` from `date-fns` to use within the computed property.

Now its time to create a computed property to create a new array of docs in order to manipulate each createdAt timestamp using the imported function

4. Create the computed property.  The map method returns an object for each doc, first spreading in the current doc and then over-riding the `createdAt` value with the newly formatted timestamp.

5. return the computed property from the `setup()` function to use in the `v-for` and alter the template

![Screenshot from 2021-03-11 15-42-37](https://user-images.githubusercontent.com/73107656/110813462-6bbe7200-8280-11eb-876e-6189ec3b3394.png)

Now the date is shown in the following format:

![Screenshot from 2021-03-11 15-44-00](https://user-images.githubusercontent.com/73107656/110813659-9dcfd400-8280-11eb-8ce0-40986f6fb6ad.png)


# Auto-Scrolling

Add auto-scrolling to the `ChatWindow` component within the `setup()` function so that the window always scrolls down to show the most recent messages. The pattern for this is at the bottom of the `setup()` function.

We add a `ref="messages"` to the window div within the template, create a ref for it within the `setup()` function and then set the value of `messages` on every update using the Vue lifecycle hook `onUpdated()` to auto-scroll to the bottom.

Here is the full `ChatWindow` pattern:

![Screenshot from 2021-03-11 16-34-03](https://user-images.githubusercontent.com/73107656/110821046-9b24ad00-8287-11eb-8495-fc720ff925aa.png)


# Route Guard 

## Preventing logged in users from hitting the Welcome view

The route guard is added to the `index.js` router file below the `Auth Guard` and uses the same pattern to start with:

![Screenshot from 2021-03-11 17-07-35](https://user-images.githubusercontent.com/73107656/110825763-4afc1980-828c-11eb-9077-ab05c540cb8e.png)
