<template>
    <div class="section">
        <h1>Focus Class</h1>
        <p class="desc">
            Add class to container when any element inside container got focus.
        </p>
        <focus-detect tag="section" class="wrapper">
            <label>First name:</label>
            <input type="text" />
            <label>Last name:</label>
            <input type="text" />
        </focus-detect>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "App"
});
</script>

<style>
body {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 2rem;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    font-size: 13px;
    color: #03071e;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#app {
    display: block;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
}

.section {
    padding: 1rem;
}

h1 {
    font-size: 2rem;
    font-weight: normal;
    margin: 0;
    color: #42b883;
}

input[type="text"] {
    display: block;
    width: 20rem;
    max-width: 100%;
    margin: 0.2rem 0;
    padding: 0.5em 1em;
    border: 1px solid #6c757d;
    font: inherit;
}

input[type="text"]:focus {
    outline: none;
    border-color: #42b883;
}

.desc {
    display: block;
    box-sizing: border-box;
    margin: 0;
    padding: 0.5rem 0;
    color: #6c757d;
}

.wrapper {
    background: #e9ecef;
    border-radius: 3px;
    border: 1px solid #e9ecef;
    padding: 1rem;
}

.wrapper.has-focus {
    border-color: #dc2f02;
}
</style>
