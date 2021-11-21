<template>
  <div>
    <AddUserForm :userdata.sync="user" @getusers="getUsers" />
    <legend>User List</legend>

    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>

          <th></th>
        </tr>
      </thead>

      <tbody style="text-align: center">
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>

          <td>
            <button @click="handleEdit(user)" class="btn btn-sm btn-warning">
              Edit</button
            >&nbsp;
            <button @click="removeUser(user.id)" class="btn btn-sm btn-danger">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import AddUserForm from "./AddUserForm";
import { baseURL } from "../constants";
export default {
  //  props: ["users"],
  data() {
    return {
      users: [],
      user: {},
    };
  },

  methods: {
    getUsers() {
      fetch(baseURL + "/users")
        .then((res) => res.json())
        .then((res) => {
          console.log("res data", res);
          this.users = res.data;
        });
    },
    handleEdit(user) {
      this.user = user;
    },
  },
  mounted() {
    this.getUsers();
  },
  components: {
    AddUserForm,
  },
};
</script>