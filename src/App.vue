<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
}
</script>

<style lang="scss">
  #app {
    height: 100%;
  }
  $green-dark: #79CB0A;
  $green-light: #B5D020;
  $orange-dark: #FF8700;
  $orange-light: #FFB100;
  $red: #FF3400;
  $grey: #8F949B;
  .xing {
    box-sizing: border-box;
  }

  .lmlsin {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(to left, $green-dark, $green-light);
  }

  .persons {
        margin: 40px 0;
        font-family: "Raleway",sans-serif;
        font-size: 14px;
        font-weight: 500;
        background-color: #BCAAA4;
        -webkit-font-smoothing: antialiased;
    }


</style>
