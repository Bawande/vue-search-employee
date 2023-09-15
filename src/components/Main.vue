<template>
  <main :class="scssStyles.main">
    <SideBar />
    <InfoBlock />
  </main>
</template>

<script>
import InfoBlock from "./Info.vue";
import SideBar from "./SideBar.vue";

import scssStyles from "./Main.module.scss";

export default {
  name: "MainBlock",
  data() {
    return {
      scssStyles,
    };
  },
  components: {
    InfoBlock,
    SideBar,
  },
};
</script>
