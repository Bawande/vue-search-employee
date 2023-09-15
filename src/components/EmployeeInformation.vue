<template>
  <div :class="scssStyles.wrapper">
    <p :class="scssStyles.message" v-if="isLoading">Загрузка...</p>
    <p :class="scssStyles.message" v-if="isNotFinde">Сотрудник не найден...</p>
    <p :class="scssStyles.message" v-if="isError">Ошибка данных...</p>
    <p
      :class="scssStyles.message"
      v-if="
        !isLoading &&
        !isNotFinde &&
        !isError &&
        Object.keys(employee).length === 0
      "
    >
      Выберите сотрудника, чтобы посмотреть его профиль
    </p>

    <div v-if="Object.keys(employee).length !== 0">
      <div :class="scssStyles.wrapper">
        <div :class="scssStyles.photo">
          <UseImage :imgUrl="images" />
        </div>

        <div :class="scssStyles.description">
          <h4 :class="scssStyles.username" class="title --h4">
            {{ employee.username }}
          </h4>

          <p :class="scssStyles.email">
            <span>email:</span>{{ employee.email }}
          </p>

          <p :class="scssStyles.phone">
            <span>phone:</span>{{ employee.phone }}
          </p>

          <h5 :class="scssStyles['about-me-title']" class="title --h4">
            О себе:
          </h5>

          <p :class="scssStyles['about-me-text']">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            delectus tenetur labore quis eius et nisi cupiditate animi sint iure
            assumenda itaque, veritatis ad suscipit rerum ratione cum officiis
            repellendus!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

import UseImage from "@/helpers/useImage.vue";

import scssStyles from "./EmployeeInformation.module.scss";

export default {
  name: "EmployeeInformation",
  data() {
    return {
      scssStyles,
      images: "./none.jpg",
    };
  },
  computed: {
    ...mapState({
      employee: (state) => state.employee.employee,
      isLoading: (state) => state.employee.isLoading,
      isNotFinde: (state) => state.employee.isNotFinde,
      isError: (state) => state.employee.isError,
    }),
  },
  components: { UseImage },
};
</script>
