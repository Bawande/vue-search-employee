<template>
  <header :class="scssStyles.wrapper">
    <h1 :class="scssStyles['header-title']" class="title --h1">Жилфонд</h1>
    <button :class="scssStyles['header-btn']" class="btn">
      <span>Пользователь</span>
    </button>
  </header>
</template>
<script>
import scssStyles from "./Header.module.scss";

export default {
  name: "HeaderBlock",
  data() {
    return {
      scssStyles,
    };
  },
};
</script>
