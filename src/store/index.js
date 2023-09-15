import { createStore } from "vuex";
import { employeeModule } from "./employeeModule";
import { employeesModule } from "./employeesModule";

export default createStore({
  modules: {
    employees: employeesModule,
    employee: employeeModule,
  },
});
