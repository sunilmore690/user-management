<template>
  <div class="container" id="app">
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/">Home</router-link> &nbsp;
      <router-link to="/register">Login/Register</router-link>
      &nbsp;&nbsp;
      <router-link to="/manageuser">Manager User</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import UserRegisterLogin from "./components/UserRegisterLogin";
import UserList from "./components/UserList";
export default {
  name: "App",
  // components: { UserRegisterLogin, UserList },
  async mounted() {
    //  await this.$store.dispatch("getUsers");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.my-form > div {
  display: flex;
  margin: 5px;
  text-align: left;
}
table tbody td {
  text-align: left;
}
.my-form > div > label {
  width: 120px;
  margin-right: 10px;
}
</style>
