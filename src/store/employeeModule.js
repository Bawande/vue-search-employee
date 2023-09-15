import axios from "axios";

import { API_URL } from "../config/config";

export const employeeModule = {
  state: {
    employee: {},
    isLoading: false,
    isNotFinde: false,
    isError: false,
  },
  getters: {
    EMPLOYEE(state) {
      return state.employee;
    },
  },
  mutations: {
    SET_EMPLOYEE_TO_STATE: (state, employee) => {
      state.employee = employee;
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
    ADD_EMPLOYEE_FROM_API({ commit }, id) {
      return axios
        .get(API_URL + `users?id=${id}`)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          if (data.length <= 0) {
            commit("SET_NOT_FINDE", true);
            commit("SET_EMPLOYEE_TO_STATE", {});
          } else {
            commit("SET_EMPLOYEE_TO_STATE", { ...data[0] });
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

    DELETE_EMPLOYEE_DATA({ commit }) {
      commit("SET_EMPLOYEE_TO_STATE", {});
    },
  },
  namespaced: true,
};
