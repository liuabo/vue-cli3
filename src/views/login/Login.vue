<template>
  <div class="login">
    <Button @click="login()">登录</Button>
  </div>
</template>

<script>
  import { setToken } from '@/utils/common';
export default {
  name: "Login",
  methods: {
    login() {
      // window.localStorage.setItem('token', 'data.sessionKey');
      // window.localStorage.setItem('nideShopUser', 'data.mobile');
      setToken('2121212');
      this.$router.push({ name: 'index' });
    }
  }
};
</script>

<style scoped lang="scss">
@import "./login";
</style>
