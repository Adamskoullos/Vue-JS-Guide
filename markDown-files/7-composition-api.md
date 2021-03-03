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
Data within the `setup()` function is by default not reactive, as it is when using the options api.  However we can make data reactive by using refs, because **refs are reactive values**:

The first image below is using data without refs, thus the data is not reactive:

![Screenshot from 2021-03-03 11-17-24](https://user-images.githubusercontent.com/73107656/109797944-0c25ee00-7c12-11eb-83bf-afadfbd389a0.png)

Once we wrap the values in refs the data becomes reactive and when using the data in the template, when it changes, the data values in the template are also updated:

![Screenshot from 2021-03-03 11-29-32](https://user-images.githubusercontent.com/73107656/109799261-bc482680-7c13-11eb-99c7-402d7c457743.png)

So now if we change the value of a property with a value wrapped in a ref the value within the template automatically updates to:

![Screenshot from 2021-03-03 11-32-50](https://user-images.githubusercontent.com/73107656/109799705-3d9fb900-7c14-11eb-92cf-def200640c6e.png)

![Screenshot from 2021-03-03 11-33-04](https://user-images.githubusercontent.com/73107656/109799709-3f697c80-7c14-11eb-95c0-ffdad37098f6.png)

**Note** 

When working with the options api inside the `data()` function we referred to properties as `this.name` and in the template we only needed to refer to `name`. 

When working with the composition api we refer to property values inside the `setup()` function as `name.value`, we do not use the `this` keyword and inside the template we just use `name`.

# Refs vs Reactive
We can use refs and reactive in the same way but there are some nuances:

1. If the property is an object with key value pairs, to target the properties: with **refs** we would `name.value.property` and with **reactive** we would just `name.property`

2. Primitive `Reactive('primitive value string')` values are not reactive! Only objects with key value pairs are.  However with `ref()` primitive values are reactive

3. `Refs` also retain their reactivity when used with external composition functions.  `Reactive` does not.

# Computed Values in the Set-Up Function

In the composition api we do not have a computed section, instead any computed function is written as a function expression but with the keyword computed instead of function and the computed property is returned as normal.

Below we define a const `matchingCars` and assign it a computed property, which returns a filtered array from the `cars` array:

![Screenshot from 2021-03-03 14-32-54](https://user-images.githubusercontent.com/73107656/109820924-5d8fa680-7c2d-11eb-816c-2ddf9ba05089.png)

We also need to import `computed` from vue:

![Screenshot from 2021-03-03 14-33-46](https://user-images.githubusercontent.com/73107656/109821049-7ac47500-7c2d-11eb-8c87-280ab6d6e4cf.png)

Then we need to return the computed property from the `setup()` function to use it in the template:

![Screenshot from 2021-03-03 14-35-49](https://user-images.githubusercontent.com/73107656/109821312-c24b0100-7c2d-11eb-9843-411c856965c7.png)

And then finally swap the original `cars` for `matchingCars` in the `v-for`:

![Screenshot from 2021-03-03 14-37-01](https://user-images.githubusercontent.com/73107656/109821477-ed355500-7c2d-11eb-8393-e8522846f3e2.png)

Below is the full pattern:

![Screenshot from 2021-03-03 14-37-51](https://user-images.githubusercontent.com/73107656/109821595-0b02ba00-7c2e-11eb-9787-6e6266240b72.png)



# Using watch and watchEffect

# Props in Set-Up Function

# Lifecycle Hooks