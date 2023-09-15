<template>
  <div
    :class="[scssStyles.wrapper, { isActive: isActive }]"
    v-on:click="handlerClickItem"
  >
    <div :class="scssStyles.photo">
      <useImage :imgUrl="images" />
    </div>
    <div :class="scssStyles.description">
      <div :class="scssStyles.username">{{ username }}</div>
      <div :class="scssStyles.email">{{ email }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

import useImage from "../helpers/useImage.vue";

import scssStyles from "./SearchEmployeesItem.module.scss";

export default {
  name: "SearchEmployeesItem",
  props: {
    employeeItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      ...this.employeeItem,
      images: "./none.jpg",
      scssStyles,
      isActive: false,
    };
  },
  components: {
    useImage,
  },
  methods: {
    handlerClickItem() {
      this.deleteEmployeeData();
      this.setIsLoading(true);
      this.addEmployeeFromApi(this.id);
    },
    ...mapActions({
      addEmployeeFromApi: "employee/ADD_EMPLOYEE_FROM_API",
      deleteEmployeeData: "employee/DELETE_EMPLOYEE_DATA",
    }),
    ...mapMutations({ setIsLoading: "employee/SET_IS_LOADING" }),
    ...mapGetters({ getEmployee: "employee/EMPLOYEE" }),
  },
  computed: {
    employeeId() {
      return this.getEmployee().id;
    },
  },
  watch: {
    employeeId() {
      this.isActive = this.getEmployee().id === this.id;
    },
  },
  mounted() {
    this.deleteEmployeeData();
  },
};
</script>

<style lang="scss">
.isActive {
  background-color: #e0e0e0;
}
</style>
