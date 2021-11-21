<template >
  <form class="my-form">
    <div>
      <label>First Name : </label>
      <input
        v-focus
        class="form-control"
        v-model="user.first_name"
        placeholder="Enter your First name"
      />
    </div>
    <div>
      <label>Last Name : </label>
      <input
        v-focus
        class="form-control"
        v-model="user.last_name"
        placeholder="Enter your Last name"
      />
    </div>
    <div>
      <label>Email: </label>
      <input
        disabled="true"
        v-focus
        class="form-control"
        v-model="user.email"
      />
    </div>

    <div>
      <button
        style="margin-left: 80px; margin-top: 10px"
        class="btn btn-sm btn-warning"
        @click.prevent="handleSubmit"
      >
        {{ this.user.id ? "Update User" : "Add User" }}
      </button>
      <button
        style="margin-left: 80px; margin-top: 10px"
        class="btn btn-sm btn-default"
        @click.prevent="handleClear"
      >
        Clear
      </button>
      <span v-if="loading" style="margin-top: 10px">Loading....</span>
    </div>
  </form>
</template>
<script>
import { baseURL } from "../constants";

export default {
  props: ["userdata"],
  data() {
    return {
      user: this.userdata || {},
    };
  },
  methods: {
    handleSubmit() {
      let url = "/users";
      let method = "POST";
      if (this.user.id) {
        url = url + "/" + this.user.id;
        method = "PUT";
      }
      fetch(baseURL + url, {
        method,
        body: JSON.stringify(this.user),
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      })
        .then((res) => {
          console.log("res", res);
          this.$emit("getusers");
        })
        .catch((e) => {
          console.error("Ex", e);
        });
    },
    handleClear() {
      this.user = {};
    },
  },

  watch: {
    userdata() {
      this.user = { ...this.userdata };
    },
  },
};
</script>
<style scoped>
</style>