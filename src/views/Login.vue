<template>
  <div class="login">
    <h1>これはログインするためのページです</h1>
    <form class="login__form">
      <div class="login__input-item">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" />
        <p v-show="email">{{ email }}</p>
      </div>
      <div class="login__input-item">
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" />
        <p v-show="password">{{ password }}</p>
      </div>
      <button class="login__button" type="button" @click="login()">
        ログイン
      </button>
    </form>
    <router-link to="/">Topへ</router-link>
  </div>
</template>
<script>
import axios from "../axios-for-auth.js";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyD1MbhRIeaeqS3wWpp9It--yDlawDee7xc",
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response);
        });
      (this.email = "ログインできたよ"), (this.password = "");
    },
  },
};
</script>
