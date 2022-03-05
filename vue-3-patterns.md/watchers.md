## Watch vs WatchEffect vs Computed

`computed` properties should be used to create a derived value from reactive data. It is mostly used as a read only value but can be structured with a getter and setter. However `watchers` should be used when side effects are required when a piece of data changes.

- [computed](#Computed)
- [watch](#watch)
- [watchEffect](#watchEffect)

---

### Computed

Computed properties are good for displaying a computed value within the template without having to write complex expressions directly within the template.
This logic is extracted into a computed property.
A function could be placed within the template which computes the current value to be displayed, however this only runs on page/component load, or if called within a watcher, where a computed property fires and updates the DOM every time the dependency changes.

The other advantage to computed properties over functions is that the computed property will only fire if the dependency changes....not on every child component render. This is because the current value is `cached` and used until the dependency changes. This can have some major compute savings.

```js
import { reactive, computed } from "vue";

const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});
```

```js
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});
```

```js
<span>{{ publishedBooksMessage }}</span>
```

If however each child component requires a live current value for example like `Date.now()` then a function would be better as this is invoked every time.

---

### watch

`watch` does not fire on initial load but will fire when the value any of its dependencies change. Dependencies are passed in as the first argument and can be a single `ref`, an array of multiple dependencies or a reactive object.

```js
const x = ref(0);
const y = ref(0);
```

The second argument is a callback that gets access to the new current value of x:

```js
// single ref
watch(x, (newX) => {
  console.log(`x is ${newX}`);
});
```

A function can be used as a getter, in the below example both `x` and `y` are dependencies and watched:

```js
// getter
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
  }
);
```

An array of multiple dependencies can be watched and their new current values accessed:

```js
// array of multiple sources
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`);
});
```

To watch the reactive state of an objects properties we use a getter function:

```js
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`);
  }
);
```

---

### watchEffect

`watchEffect` fires on initial load and also when any of its dependencies change. `watchEffect` takes a callback which can be `asynchronous` and any data within the definition of the callback is watched.

In the example below both `url` and `data` are watched:

```js
const url = ref("https://...");
const data = ref(null);

watchEffect(async () => {
  const response = await fetch(url.value);
  data.value = await response.json();
});
```

---

`callback flush timing`, by default the callback is run before the DOM is updated, in order to wait and run the code after the DOM has updated in order to access updated DOM elements we use the below pattern:

```js
watch(source, callback, {
  flush: "post",
});

watchEffect(callback, {
  flush: "post",
});
```

---

#### Stopping a Watcher

If a `watcher` is inside the `setup` and at the top level (created synchronously) there is no need to manually stop it as it will be stopped as the component is `unmounted`.
However if the watcher is created `asynchronously` is it not bound to the component and must be stopped manually:

```js
const unwatch = watchEffect(() => {})

// ...later, when no longer needed
unwatch()
</script>
```

A better way to work with async data within `watchEffect` would be the example below:

```js
// data to be loaded asynchronously
const data = ref(null);

watchEffect(() => {
  if (data.value) {
    // do something when data is loaded
  }
});
```
