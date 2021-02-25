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