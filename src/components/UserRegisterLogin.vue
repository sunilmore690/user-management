<template>
  <div>
    <div v-if="error">
      <span style="color: red">{{ message }}</span>
    </div>
    <div v-if="!error">
      <span style="color: green">{{ message }}</span>
    </div>
    <form class="my-form" style="margin-top: 20px">
      <div>
        <label>Email : </label>
        <input
          v-focus
          class="form-control"
          v-model="user.email"
          placeholder="Enter your Email  address"
          s
        />
      </div>
      <div>
        <label>Password: </label>
        <input class="form-control" type="password" v-model="user.password" />
      </div>

      <div style="margin-top: 10px">
        <button
          style="margin-left: 80px"
          class="btn btn-sm btn-warning"
          @click.prevent="handleSubmit"
        >
          {{ this.isLoginForm ? "Login" : "Signup" }}
        </button>

        <button class="btn btn-link" @click.prevent="handleSwitch">
          {{ this.isLoginForm ? "Register" : "Already User?" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {baseURL} from '../constants'
export default {
  data() {
    return {
      user: {},
      isLoginForm: true,
      error: false,
      message: null,
    };
  },
  methods: {
    handleSwitch() {
      this.isLoginForm = !this.isLoginForm;
    },
    handleSubmit() {
      const url = this.isLoginForm ? "/login" : "/register";
      fetch(baseURL + url, {
        method: "POST",
        body: JSON.stringify(this.user),
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
      })
        .then((res) => res)
        .then(async (res) => {
          console.log("res", res.status);
          let body = await res.json();
          console.log("body", body);

          if (res.status !== 200) {
            this.error = true;
            this.message = body.error;
          } else {
            this.error = false;
            this.message = `${
              this.isLoginForm ? "Login Successfull" : "Registration Done"
            }`;
          }
        });
    },
  },
};
</script>

<style>
</style>