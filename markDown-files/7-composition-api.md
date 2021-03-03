# Composition API Fundamentals

ToC:

[Composition api basics](#Composition-api-basics)<br>
[Template Refs and Set-up Function](#Template-Refs-and-Set-up-Function)<br>
[Using Refs for Reactivity](#Using-Refs-for-Reactivity)<br>
[Refs vs Reactive](#Refs-vs-Reactive)<br>
[Computed Values in the Set-Up Function](#Computed-Values-in-the-Set-Up-Function)<br>
[Using watch and watchEffect](#Using-watch-and-watchEffect)<br>
[Props in Set-Up Function](#Props-in-Set-Up-Function)<br>
[Lifecycle Hooks](#Lifecycle-Hooks)<br>


# Composition api basics
To use the composition api we use the `setup` function which houses all the data and functions.  To have access and use any of the data or functions we need to return them via a returned object.  Once we do this we can use them in the template:  

![Screenshot from 2021-03-03 10-49-38](https://user-images.githubusercontent.com/73107656/109794821-2b228100-7c0e-11eb-9360-5a3d09e70d5a.png)

As we can see from the above example all the data, refs and functions are grouped in one location and simply returned within the returned object in order to use them. 
The `setup()` function is run before any lifecycle hooks.
 
# Template Refs and Set-up Function
The above example also includes a `ref` we have called `t`.  We first define the const name and assign it the `ref()` function with the initial value being passed as the argument within the `ref`

![Screenshot from 2021-03-03 10-57-44](https://user-images.githubusercontent.com/73107656/109795791-4c37a180-7c0f-11eb-8376-02d8b3d2561c.png)

Vue then automatically imports a `ref` from Vue.

![Screenshot from 2021-03-03 11-00-18](https://user-images.githubusercontent.com/73107656/109796100-a89ac100-7c0f-11eb-88df-e70af2574813.png)

We then need to add the ref by name to the returned object to be accessible to the template.

![Screenshot from 2021-03-03 10-58-40](https://user-images.githubusercontent.com/73107656/109795906-6d988d80-7c0f-11eb-9bc6-dfa53399df96.png)

We then need to add a `ref` attribute to the element tag within the template that we want to grab using the ref. Now we have access to that element and its content. 

![Screenshot from 2021-03-03 10-59-21](https://user-images.githubusercontent.com/73107656/109795991-8608a800-7c0f-11eb-841f-747c041f406e.png)

![Screenshot from 2021-03-03 11-01-12](https://user-images.githubusercontent.com/73107656/109796222-c9631680-7c0f-11eb-8957-db47abd9b250.png)

# Using Refs for Reactivity

# Refs vs Reactive

# Computed Values in the Set-Up Function

# Using watch and watchEffect

# Props in Set-Up Function

# Lifecycle Hooks