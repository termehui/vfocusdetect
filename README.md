# Focus Detect

Detect if any element inside container got focus (CSS :focus-within like functionality)

## Installation

### CDN

this package published as `vFocusDetect` module in umd.

```html
<script src="https://unpkg.com/@termehui/vfocusdetect"></script>
```

### NPM

```bash
npm i @termehui/vfocusdetect
```

import and install with default name (focus-detect):

```ts
import { createApp } from "vue";
import App from "./App.vue";
import vFocusDetect from "@termehui/vfocusdetect";
createApp(App).use(vFocusDetect).mount("#app");
```

import and install component with custom name:

```ts
import { createApp } from "vue";
import App from "./App.vue";
import { FocusDetect } from "@termehui/vfocusdetect";
createApp(App)
  .component("focus-within", FocusDetect) // now you can use as <focus-within> tag
  .mount("#app");
```

## Usage

```html
<template>
  <focus-detect
    tag="p"
    cls="focused"
    @focusin="handleFocus"
    @focusout="handleBlur"
  >
    <label>First name:</label>
    <input type="text" />
    <label>Last name:</label>
    <input type="text" />
  </focus-detect>
</template>
```

## Properties

| Name | Type   | Description                                | Default   |
| ---- | ------ | ------------------------------------------ | --------- |
| tag  | string | container tag                              | div       |
| cls  | string | class to attach to main container on focus | has-focus |

## Events

| Name     | Params | Description                     |
| -------- | ------ | ------------------------------- |
| focusin  | none   | fired when container got focus  |
| focusout | none   | fired when container lost focus |
