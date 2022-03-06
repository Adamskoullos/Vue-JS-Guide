## Provide and Inject

`provide` can be used at the `app` level or scoped at component level to be shared between a parent and children components.

When working with data scoped and shared with a parent and its children we can use `props and emits` however passing props down let alone emitting events up a deeply nested chain can get intricate and tightly couples components. In this situation we can use `provide` and `inject` to clean up and simplify the approach of sharing and working with data between parent and children components.

To eliminate the need to emit events back up we can add a setter function to the provider object so the single source of truth can be updated directly from `inject` components and be reflected in all places:

`parent`

```html
<script setup>
  import { provide, ref } from "vue";

  const posts = ref(data); // fetched data

  const setPosts = (posts) => {
    posts.value = posts;
  };

  provide("blog", {
    posts: readonly(posts),
    setPosts,
  });
</script>
```

`deeply nested child`

```html
<script setup>
  import { inject } from "vue";

  const { posts, setPosts } = inject("blog");
</script>
```

---

#### App level

```js
import { createApp } from "vue";

const app = createApp({});

app.provide(/* key */ "message", /* value */ "hello!");
```
