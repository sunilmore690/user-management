import VueRouter from "vue-router";
import Home from "./components/Home.vue";

import UserRegisterLogin from "./components/UserRegisterLogin";
import UserList from "./components/UserList";
const routes = [
  { path: "/", component: Home },
  { path: "/register", component: UserRegisterLogin },
  { path: "/manageuser", component: UserList }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});
export default router;
