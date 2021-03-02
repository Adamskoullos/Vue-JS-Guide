# Working with forms and data binding

### ToC:
[Two way data binding](#Two-way-data-binding)<br>
[Select fields](#Select-fields)<br>
[Checkboxes](#Checkboxes)<br>
[Keyboard events and modifiers](#Keyboard-events-and-modifiers)<br>
[Form submission](#Form-submission)<br>


# Two way data binding

We can create a two way data bind between:

1. A property within a components data object

and 

2. An input element within the components template

To do this we use the `v-model` directive within the input element we want to bind with the data property:

![Screenshot from 2021-02-25 12-09-02](https://user-images.githubusercontent.com/73107656/109151648-5a467780-7762-11eb-974f-41e986083941.png)

![Screenshot from 2021-02-25 12-09-18](https://user-images.githubusercontent.com/73107656/109151698-66cad000-7762-11eb-8068-f29bb1400001.png)


# Select fields

The `v-model` directive can also be used with data fields:

![Screenshot from 2021-02-25 13-05-02](https://user-images.githubusercontent.com/73107656/109157634-2ff8b800-776a-11eb-9c3a-b5cef87e0a52.png)

# Checkboxes

We can work with checkboxes in two ways:

1. With booleans so the item is checked or unchecked
2. And with arrays, where the checked item is added to the array.  Example of the array pattern below:

![Screenshot from 2021-02-25 13-27-59](https://user-images.githubusercontent.com/73107656/109160170-5cfa9a00-776d-11eb-8d25-fbaf98d40f44.png)

![Screenshot from 2021-02-25 13-28-27](https://user-images.githubusercontent.com/73107656/109160202-67b52f00-776d-11eb-9bf6-8049d0530642.png)


# Keyboard events and modifiers

We can set event listeners to keyboard events such as keyup, keydown etc and trigger methods as normal.  The below example shows a pattern that can be used to do this within Vue components.

1. First set up an event listener in this case `@keyup` to the input and map it to a method.  Note the input already has a data bind to `tempSkills`, meaning each key stroke adds a to its string
2. define the logic.  The example below does the following:
    - If the `keyup` event is after a comma or space 
    - and the skills array does not already include this skill
    - the comma or space is chopped off the string and the string/skill is added to the skills array
    - set the tempSkills to an empty string

![Screenshot from 2021-02-25 14-32-49](https://user-images.githubusercontent.com/73107656/109169669-f464ea80-7777-11eb-8510-c15505cbaaf1.png)

![Screenshot from 2021-02-25 14-33-12](https://user-images.githubusercontent.com/73107656/109169697-ffb81600-7777-11eb-8976-96aca91e418c.png)

Up in the form, at the bottom of `<template>` a new `div` is added for each new skill.  This is done via the `v-for` directive.  When ever a `v-for` is used it must be accompanied with a `key`.  Notice how the value used for the key is the skill itself and how the key has a data bind. 

# Form submission

We don't need to use `preventDefault()` with Vue instead we use an event listener modifier `@submit.prevent`

