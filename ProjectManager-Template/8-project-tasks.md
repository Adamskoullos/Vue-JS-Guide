# Setting up 

Create an `AddTask` component, import into `ProjectDetails`, add to components and add to template.  Set to only show if the current user is the owner of the project and also pass down the `document` prop which we will call `project` so we can access the `tasks` array within the document/project object.

![Screenshot from 2021-03-18 09-34-05](https://user-images.githubusercontent.com/73107656/111604288-18db4200-87cd-11eb-9fc2-bc9da0027aa7.png)

## Create the initial structure for the `AddTask` component.

**Template**: Add a button `Add Task` to show as a default, once clicked the form is shown. We do this via an `addTask` boolean ref.  

The `task` input is a ref. 

**Setup()**: The form on submit fires the `handleAddTask` which creates a task object which includes the input value of `task`, a completed property initially set to false and a unique id for the task.  We will now extract the logic to add the new task to the project object within firestore and then come back to complete the `handleAddTask` function.  This is the pattern so far.

![Screenshot from 2021-03-18 09-41-49](https://user-images.githubusercontent.com/73107656/111605553-4e345f80-87ce-11eb-80e2-2e4afeda917a.png)


## Update project document within firestore by adding tasks

We already have the `useDocument` composable which has the `deleteDoc` function and `isPending` property, so we can add the `addNewTask` function to this composable.

The `addNewTask()` function has a very similar pattern to `deleteDoc()` so we will start with this.  We also already have a `docRef` within the composable which uses the arguments passed into `useDocument` so we can re-use this.  

Then lastly we need to add the new function `addNewTask()` to the returned object so we can extract it. 

![Screenshot from 2021-03-18 11-16-40](https://user-images.githubusercontent.com/73107656/111617743-6d85b980-87db-11eb-9206-fa35488f58ea.png)


Now we can import `useDocument` and extract `addNewTask()` and `isPending` to use within the `handleAddTask()` function within the `AddTask` component.

Here we first create the new task object to be added the tasks array of the project. The we pass in an object which includes any properties to be updated, in this case the `tasks` array.  We spread the existing tasks array into the new array first and then add the new task object to the array, re-assigning this new array to the tasks property.

Then we reset the form input value to an empty string ready the user to add another new task.

Here is the `AddTask` component pattern so far:

![Screenshot from 2021-03-18 11-26-11](https://user-images.githubusercontent.com/73107656/111618842-c144d280-87dc-11eb-9ae4-61f3a3d72262.png)



# Adding the Tasks array to the the ProjectDetails view

The template for the task list is within the `ProjectDetails` view, with the logic also being within the `setup()` function.  The `addNewTask` function within the `useDocument` composable was altered to be more general and renamed to `updateTasks`.  If a task is added, deleted or the completed state is changed, we are updating the project and more specifically the tasks array, so the `updateTasks` makes more sense and is more reusable.

The `Add Tasks` button toggles the a boolean showing and hiding the add task form, with the form now also having a close button.


This is the `updateTasks` function within the `useDocument` composable:

![Screenshot from 2021-03-19 05-32-35](https://user-images.githubusercontent.com/73107656/111735798-87bfa600-8874-11eb-8b83-b3453016e0ac.png)


Here are the pattern for task list template within the `ProjectDetails` view: 

![Screenshot from 2021-03-19 05-33-33](https://user-images.githubusercontent.com/73107656/111735877-a887fb80-8874-11eb-9c40-01c2f855843f.png)


Here are the click event functions for the tasks list within the `ProjectDetails` `setup()`, both utilising the `updatetasks` function:

![Screenshot from 2021-03-19 05-36-29](https://user-images.githubusercontent.com/73107656/111736085-116f7380-8875-11eb-9163-6fced9c18452.png)


And this is the `AddTask` component:

![Screenshot from 2021-03-19 05-38-46](https://user-images.githubusercontent.com/73107656/111736258-63b09480-8875-11eb-9681-9874cd8c10a4.png)

