<template>
  <div class="login">
    <h1>これはログインページです</h1>
    <form class="login__form">
      <div class="login__input-item">
        <label for="email">メールアドレス</label>
        <input type="email" />
      </div>
      <div class="login__input-item">
        <label for="password">パスワード</label>
        <input type="password" />
      </div>
      <button class="login__button" @click="login()">ログイン</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    signUp: function() {},
  },
};
</script>
