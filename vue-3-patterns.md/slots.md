## Slots

We can make components reusable by passing in specific props for each use case, however sometimes we need more flexibility but still want to reuse code where we can. In this instance slots allows us to create reusable container components that can be dynamically used with different internal content.
The slot can be a single value or multiple child components:

A reusable container component is created with the `slot` tags:

`FancyButton.vue`

```html
<button class="fancy-btn">
  <!-- slot outlet -->
  <slot></slot>
</button>
```

Then used within components, in this instance the text `Click me!` is passed in as the `default slot`:

```html
<FancyButton> Click me! </FancyButton>
```

The below example shows a span tag and another component used within the `default slot`:

```html
<FancyButton>
  <span style="color:cyan">Click me! </span>
  <AwesomeIcon />
</FancyButton>
```

Slots can be given default content if no content is available within the slot:

```html
<button type="submit">
  <slot>
    Submit
    <!-- default content -->
  </slot>
</button>
```

We can use multiple slots within a container component by using a mix of the `default slot` and `named slots`:

`BaseLayout.vue`

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <!-- Default slot -->
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

When assigning `template` tags to a slot we can use either : `v-slot:header` or the shorthand: `#header`

```html
<BaseLayout>
  <template #header>
    <!-- content for the header slot -->
    <h1>Here might be a page title</h1>
  </template>
  <template #default>
    <!-- content for the default slot -->
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>
  <template #footer>
    <!-- content for the footer slot -->
    <p>Here's some contact info</p>
  </template>
</BaseLayout>
```

The default slot content does not need the `template` tags so could be structured like this:

```html
<BaseLayout>
  <template #header>
    <!-- content for the header slot -->
    <h1>Here might be a page title</h1>
  </template>
  <!-- content for the default slot -->
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
  <template #footer>
    <!-- content for the footer slot -->
    <p>Here's some contact info</p>
  </template>
</BaseLayout>
```

Dynamic slots can be used which will either be compiled to a string or null and must be a value and not an expression. Use a computed property if needed:

```html
<template #[dynamicSlotName]> ... </template>
```

`slotProps` can be passed into `default` slots with the below pattern:

`ContainerComponent.vue`

```html
<script setup>
  const greetingMessage = "hello";
</script>

<template>
  <div>
    <slot :text="greetingMessage" :count="1"></slot>
  </div>
</template>
```

`Parent component`

```html
<script setup>
  import ContainerComponent from "./ContainerComponent.vue";
</script>

<template>
  <ContainerComponent v-slot="slotProps">
    {{ slotProps.text }} {{ slotProps.count }}
  </ContainerComponent>
</template>
```

Using `slotProps` with `named` scoped slots:

`BaseLayout.vue`

```html
<div class="container">
  <header>
    <slot name="header" headerProps="someObject"></slot>
  </header>
  <main>
    <!-- Default slot -->
    <slot v-slot="slotProps"></slot>
  </main>
  <footer>
    <slot name="footer" footerProps="someObject"></slot>
  </footer>
</div>
```

```html
<BaseLayout>
  <template #header="headerProps"> {{ headerProps.title }} </template>

  <template #default="defaultProps"> {{ defaultProps.body }} </template>

  <template #footer="{ address }"> {{ address }} </template>
</BaseLayout>
```
