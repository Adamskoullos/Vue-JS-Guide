# Create and mount Vue app

# Data object to dynamically populate HTML content

# Event listener
- **v-on:**
- **@**

# Conditional rendering 
- **v-if** Removes totally from the DOM
- **v-else**
- **v-show** changes to display: none

This means that v-show consumes less resources 

# Toggle content and labels

# Mouse events

We automatically get the event object as the first argument, however if we want to use further arguments, we have to explicitly state the the event argument using the $ sign: $event.

# Cycle through and render items in an array using v-for

```v-for="item in array"```

This is a short hand forEach 

# Attribute binding (dynamic binding)
 Place the below code before the attribute to tell Vue the value is controlled by the app
 ```v-bind:```

 The short hand for this is just a colon before the attribute:
 ```:```

This can be used for any attributes that have values to be rendered for example images. In this case the object within the array has an img: property with the path to the image as its value then the img tag in the HTML would have a src value using the dot notation to the image within the object.

# Dynamic classes
Using the bind shortcut in front of the class attribute, add curly braces inside the quotes.  Then add a new class name followed by colon then use dot notation to target property value.  The below say's > if true add this class name, so if this object has the prop value of true then add class. 

```
:class="{ className: obj.prop }"

```


# Computed Properties

Computed properties are used ofr dynamic data where the data within an array changes.  The example in the files show a computed property method using the filter array method to filter objects that have trump = true.  Then the v-for loop was changed to loop through this filtered array