<template>
  <div :class="scssStyles.wrapper" class="container">
    <HeaderBlock />
    <MainBlock />
  </div>
</template>

<script>
import MainBlock from "../components/Main.vue";
import HeaderBlock from "../components/Header.vue";

import scssStyles from "./HomePage.module.scss";

export default {
  name: "HomePage",
  data() {
    return {
      scssStyles,
    };
  },
  components: {
    MainBlock,
    HeaderBlock,
  },
};
</script>
