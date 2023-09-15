import axios from "axios";
import { createStore } from "vuex";
import { API_URL } from "../config/config";

export default createStore({
  state: {
    employees: [],
    isLoading: false,
    isNotFinde: false,
    isError: false,
  },
  getters: {
    EMPLOYEES(state) {
      return state.employees;
    },
  },
  mutations: {
    SET_EMPLOYEES_TO_STATE: (state, employees) => {
      state.employees = employees;
    },

    SET_IS_LOADING: (state, value) => {
      state.isLoading = value;
    },

    SET_IS_ERROR: (state, value) => {
      state.isError = value;
    },

    SET_NOT_FINDE: (state, value) => {
      state.isNotFinde = value;
    },
  },
  actions: {
    SEARCH_EMPLOYEES_FROM_API({ commit }, data) {
      return axios
        .get(API_URL + `users?username_like=${data}`)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          if (data.length <= 0) {
            commit("SET_NOT_FINDE", true);
            commit("SET_EMPLOYEES_TO_STATE", []);
          } else {
            commit("SET_EMPLOYEES_TO_STATE", [...data]);
            commit("SET_NOT_FINDE", false);
          }
          commit("SET_IS_LOADING", false);
        })
        .catch((error) => {
          commit("SET_IS_LOADING", false);
          commit("SET_IS_ERROR", true);

          console.error(error);
        });
    },

    DELETE_ALL_EMPLOYEES_DATA({ commit }) {
      commit("SET_EMPLOYEES_TO_STATE", []);
    },
  },
});
