# A handy reminder a some very basic Vue nuts and bolts

ToC:

[Event listener](#Event-listener)<br>
[Conditional rendering](#Conditional-rendering)<br>
[Toggle content and labels](#Toggle-content-and-labels)<br>
[Mouse events](#Mouse-events)<br>
[Cycle through and render items in an array using v-for](#Cycle-through-and-render-items-in-an-array-using-v-for)<br>
[Attribute binding (dynamic binding)](#Attribute-binding-(dynamic-binding))<br>
[Dynamic classes](#Dynamic-classes)<br>
[Computed Properties](#Computed-Properties)<br>

# Event listener
- **v-on:**
- **@**

# Conditional rendering 
- **v-if** Removes totally from the DOM
- **v-else**
- **v-show** changes to display: none

This means that v-show consumes less resources 

# Toggle content and labels

A very cool toggle pattern:

![Screenshot from 2021-03-01 04-16-16](https://user-images.githubusercontent.com/73107656/109766845-a4aa7700-7bee-11eb-8d3a-965238544fd7.png)

# Mouse events

We automatically get the event object as the first argument, however if we want to use further arguments, we have to explicitly state the the event argument using the $ sign: $event.

# Cycle through and render items in an array using v-for

When we use `v-for` to cycle through and render a template to the DOM we also need to attach a `key` so each item has a unique identifer and can be searched for and worked on:

![Screenshot from 2021-03-02 11-44-36](https://user-images.githubusercontent.com/73107656/109766508-2c43b600-7bee-11eb-8d6c-87a16b870d29.png)


# Attribute binding (dynamic binding)
 We can use data binding to bind a component data property to an attribute within the template. This means the attribute value is not hard coded but instead the current value of the data property is dynamically injected as the attribute value. To set this up we first need a data property, then we bind that data to the attribute using either `v-bind:` or `:` for short:

 ![Screenshot from 2021-03-02 13-11-35](https://user-images.githubusercontent.com/73107656/109766218-c5260180-7bed-11eb-94c6-20fa8e45d24a.png)

![Screenshot from 2021-03-02 12-03-29](https://user-images.githubusercontent.com/73107656/109766222-c6efc500-7bed-11eb-9941-3f766672dce5.png)

# Dynamic classes
Using the bind shortcut in front of the class attribute, add curly braces inside the quotes.  Then add a new class name followed by colon then use dot notation to target property value.  The below say's > if true add this class name, so if this object has the prop value of true then add class. 

```
:class="{ className: obj.prop }"

```


# Computed Properties

Computed properties are used for dynamic data where the data within an array changes.  When we want to display different parts of an array depending on the user input we can use a computed property instead of a method.  In this situation the source data is left un touched but the computed property creates a new array that dynamically populates.  This new computed property array is then used within the `v-for` loop instead of the source array.  The below shows an example where `tasks` is the source array but we want to show all, open or completed tasks depending on which tab is active.  We make a new computed property which is named `filteredTasks` and return the new array to `filteredTasks` and then just place the `filteredTasks` array into the `v-for`:

![Screenshot from 2021-03-02 16-05-18](https://user-images.githubusercontent.com/73107656/109764678-c35b3e80-7beb-11eb-8699-607771076185.png)

![Screenshot from 2021-03-02 16-05-37](https://user-images.githubusercontent.com/73107656/109765360-a5420e00-7bec-11eb-804c-014cf9823e36.png)