<template>
  <div>
    <div class="row">
      <div
        class="col-sm-2 col-md-3 col-xs-4"
        v-for="user in users"
        :key="user.id"
      >
        <div
          style="
            padding: 4px;
            margin-bottom: 5px;
            box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
          "
        >
          <img
            :src="user.avatar"
            style="height: 100%; width: 100%; object-fit: contain"
          />
          <div style="padding: 14px">
            <span>{{ user.first_name }} {{ user.last_name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { baseURL } from "../constants";
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      fetch(baseURL + "/users")
        .then((res) => res.json())
        .then((res) => {
          console.log("res", res);
          this.users = res.data;
        });
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style>
</style>