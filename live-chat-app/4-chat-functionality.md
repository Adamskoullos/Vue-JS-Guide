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