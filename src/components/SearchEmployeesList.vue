<template>
  <div :class="scssStyles.wrapper">
    <h4 :class="scssStyles['list-title']" class="title --h4">Результаты</h4>
    <p
      :class="scssStyles.message"
      v-if="!isLoading && !isNotFinde && !isError && employees.length === 0"
    >
      начните поиск
    </p>
    <p :class="scssStyles.message" v-if="isLoading">Поиск...</p>
    <p :class="scssStyles.message" v-if="isNotFinde">ничего не найдено</p>
    <p :class="scssStyles.message" v-if="isError">Ошибка данных...</p>
    <div v-if="employees.length > 0">
      <SearchItem
        v-for="employee in employees"
        :key="employee.id"
        :employeeItem="employee"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

import SearchItem from "./SearchEmployeesItem.vue";

import scssStyles from "./SearchEmployeesList.module.scss";

export default {
  name: "EmployeesList",
  components: {
    SearchItem,
  },
  data() {
    return {
      scssStyles,
    };
  },
  computed: {
    ...mapState({
      employees: (state) => state.employees.employees,
      isLoading: (state) => state.employees.isLoading,
      isNotFinde: (state) => state.employees.isNotFinde,
      isError: (state) => state.employees.isError,
    }),
  },
};
</script>
<style lang="scss"></style>
