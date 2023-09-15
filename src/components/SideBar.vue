<template>
  <div :class="scssStyles.wrapper">
    <SearchInput />
    <SearchList />
  </div>
</template>
<script>
import SearchInput from "./SearchEmployeesInput.vue";
import SearchList from "./SearchEmployeesList.vue";

import scssStyles from "./SideBar.module.scss";

export default {
  name: "SideBar",
  data() {
    return {
      scssStyles,
    };
  },
  components: {
    SearchInput,
    SearchList,
  },
};
</script>
