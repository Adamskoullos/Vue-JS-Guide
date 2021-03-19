## The firestore 'where()' query

When making a reference to a firestore collection we can use the firestore `where()` method to filter items from a collection that meet the `where` criteria.

`where('property', 'operator', 'value')`

As above `where()` takes three arguments.

We will use `where()` to filter projects that are created by just the current user so we can display them on the `My Project` view

We use where by chaining it onto the end of the collection reference, however the pattern used within the `getCollection` composable currently grabs all of the collection documents, which we also want to have access to for the team projects view.  So beneath the `collectionRef` we add an `if` statement.  This works as we pass in a second argument to `getCollection` when we destruct it `query`.  The if statement code only runs if the `query` argument has been passed in.  In which case the `where()` method is added to the `collectionRef` and `query` is **spread** in.

![Screenshot from 2021-03-19 06-50-10](https://user-images.githubusercontent.com/73107656/111742039-5d271a80-887f-11eb-88a3-ed3c75580d59.png)

Structuring the `getCollection` composable in this way allows us to grab the whole collection unless a `where` query has been passed in i which case the filtered collection is grabbed.

`where()` has three arguments so the value of `query` is structured as an array with three items.  This is how the pattern looks on the `UserProjects` view.

![Screenshot from 2021-03-19 06-53-41](https://user-images.githubusercontent.com/73107656/111742307-daeb2600-887f-11eb-9f76-d07a8b485fd7.png)

We largely use the same structure as the `Projects` view, with some alterations:

1. When we destruct `getcollection` we add in the second argument,
`query` which is an array with three items

2. We also need to import the `getUser` composable as we need to access the user id as the third argument in the array

In this instance, only projects that are created by the logged in user are grabbed.
