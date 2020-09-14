<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
  $green-dark: #79CB0A;
  $green-light: #B5D020;
  $orange-dark: #FF8700;
  $orange-light: #FFB100;
  $red: #FF3400;
  $grey: #8F949B;
  * {
    box-sizing: border-box;
  }
  body {
    height: 100%;
    font-family: 'Roboto', sans-serif !important;
    background: linear-gradient(to left, $green-dark, $green-light);
  }


</style>
