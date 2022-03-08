## Composables

Composables are used to create reusable functions that work with stateful logic.

Guiding principles:

- If no reactive APIs are used consider moving to normal utility function (easier for testing)
- Getter functions that take no arguments to be refactored to use computed if possible to take advantage of caching
- Data to be made readonly if possible when exposed
- Mutations undertaken by composable functions only

Patterns:

1. Scoped Instance
   - Domain specific
   - Generic
2. Global Singleton
   - Domain Specific
   - Generic

Use cases:

A `scoped instance` creates a new instance each time the composable is invoked and works well for shared data between parent and child components.

Example 1 > `useState`: (Generic)

Inspired by Reacts useState hook, composables allows us to create our own.

Imported into the parent, the `ref` is created giving it a name and initial value. The ref and set state functions are created and returned. This property and function can be used in the parent and passed down to children who all share and are able to mutate the same reactive source of truth:

```js
import { useState } from "./local-state.js";

const { posts, setPosts } = useState("posts", data);
```

Example 2 > `useFetch`: (Generic)

```js
import { useFetch } from "./requests.js";

const { data, error } = useFetch("url");
```

Internals of `requests.js`:

```js
import { ref } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error };
}
```

---

The `Global Singleton` pattern is used when sharing and working with data across an application for example the `store`. The below example shows the globally available shared data defined in the module scope rather than within the composable. Each new instance of `useData` will use the single instance `globalData`.

Functions that work with the data can also be outside the composable and only the data and methods returned from the composable that we want to expose.

```js
import { ref, readonly } from 'vue'

// global state, created in module scope
const globalData = ref(1)

const setData = (data) => {
    // logic to set globalData
}
export function useData() {
  return {
    readonly(globalData),
    setData,
  }
}
```
