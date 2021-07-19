<template>
  <div class="top">
    <p>これはTop画面です</p>
    <div class="top__inner">
      <div class="top__hero">ヒーロービューです</div>
      <div class="top__how-to">使い方です</div>
      <div class="top__catch">キャッチコピーです</div>
    </div>
    <router-link to="/login" tag="button">ログインページへ</router-link>
  </div>
</template>

<script>
export default {
  name: "Top",
};
</script>
