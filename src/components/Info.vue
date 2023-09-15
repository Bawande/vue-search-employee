<template>
  <div :class="scssStyles.wraperr">
    <EmployeeInformation />
  </div>
</template>
<script>
import EmployeeInformation from "./EmployeeInformation.vue";

import scssStyles from "./Info.module.scss";

export default {
  name: "InfoBlock",
  data() {
    return {
      scssStyles,
    };
  },
  components: {
    EmployeeInformation,
  },
};
</script>
