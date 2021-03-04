[Fetching data in the setup function](#Fetching-data-in-the-setup-function)<br>
[Composables - Composition functions](#Composables---Composition-functions)<br>
[Creating a Composable](#Creating-a-Composable)<br>
[Creating a Loading spinner](#Creating-a-Loading-spinner)<br>
[Making a web form](#Making-a-web-form)<br>
[POST request](#POST-request)<br>

----------------------------------------------------------------------

# Fetching data in the setup function
The below pattern includes:

- Async function
- fetch request
- try/catch blocks
- Error handling
- Loading time handling

There is a lot going on lets unpack it, but first here is the full pattern:

![Screenshot from 2021-03-04 12-10-01](https://user-images.githubusercontent.com/73107656/109961973-9047a680-7ce2-11eb-849b-7caef84109ab.png)

We are using json-server for a local host db.  

1. Using `ref()` define an empty `posts` array and an `error` with initial value of `null`.  I have also saved the endpoint in a short name `uri`.

2. Define a const `load` and assign it an `async` function

3. Within the function, structure `try`, `catch` blocks

4. define a let `data` and assign it the returned value of the await fetch request. 

5. Once the fetch request has returned something, the next line of code is run. The thread runs the `if` statement and throws an error if `!data.ok`. `ok` is a property that can be accessed here.

6. If all ok the `if` statement is skipped and the json data once turned into an object is returned and assigned as the value of the `posts` array.

7. We call `load()` within the `setup()` function above the return and then return the `posts` array and `error` to be accessible within the template.

Now just focusing on the template:

![Screenshot from 2021-03-04 12-25-25](https://user-images.githubusercontent.com/73107656/109963783-b5d5af80-7ce4-11eb-9850-cf96d2871a36.png)

8. We have a `v-if` to only display if there is an error

9. We have a div that displays the posts only if the `posts` array has a length of 1 or more

10. If `posts` does not have a length, we also have an `else` to display some kind or `loading` content

# Composables - Composition functions

# Creating a Composable

# Creating a Loading spinner

# Making a web form

# POST request