<template>
  <div :class="scssStyles.wrapper">
    <h3 :class="scssStyles['search-title']" class="title --h4">
      Поиск сотрудников
    </h3>
    <input
      :class="scssStyles.input"
      type="search"
      v-model="inputValue"
      placeholder="Введите Id или имя "
    />
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

import scssStyles from "./SearchEmployeesInput.module.scss";

const regExpMultipleSearch = (request) => {
  const regTest = /,\s\S{2}|\s,\s\S{2}/g.test(request);

  if (regTest) {
    return request.replace(/,\s|\s,\s/g, "|").trim();
  }

  return request.trim();
};

export default {
  name: "SearchEmployeesInput",
  data() {
    return {
      inputValue: "",
      scssStyles,
    };
  },
  watch: {
    inputValue(newInput) {
      if (newInput.length >= 2) {
        this.setIsLoading(true);
        this.searchEmployeesFromApi(regExpMultipleSearch(newInput));
      } else {
        this.deleteAllEmployeesData();
      }
    },
  },
  methods: {
    ...mapActions({
      searchEmployeesFromApi: "employees/SEARCH_EMPLOYEES_FROM_API",
      deleteAllEmployeesData: "employees/DELETE_ALL_EMPLOYEES_DATA",
    }),
    ...mapMutations({ setIsLoading: "employees/SET_IS_LOADING" }),
  },
  mounted() {
    this.deleteAllEmployeesData();
  },
};
</script>

<style lang="scss"></style>
