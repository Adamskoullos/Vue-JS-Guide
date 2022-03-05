## Tabs

Vue pattern for tabbed content:

1. Create section/page for tabbed content
2. import components to be the content for each tab
3. Create the component structure with tabs and main content area
4. Add `<component></component>` tags for the current active tabbed content to be dynamically displayed

```js
import Home from "./Home.vue";
import Posts from "./Posts.vue";
import Archive from "./Archive.vue";
import { ref } from "vue";

const currentTab = ref("Home");

const tabs = {
  Home,
  Posts,
  Archive,
};
```

```js
<div class="demo">
    <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
        >
        {{ tab }}
    </button>
    <component :is="tabs[currentTab]" class="tab"></component>
</div>
```
