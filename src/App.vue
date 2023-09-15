<template>
  <HomePage />
</template>

<script>
import HomePage from "./layout/HomePage";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style lang="scss">
@import "reset-css";

body {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  min-width: 320px;

  color: $primary-color;

  font-size: 14px;
  line-height: normal;

  background-color: $background;

  font-family: _Montserrat, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Fsira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
