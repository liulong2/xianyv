<template>
  <div id="app">
    <router-view></router-view>
    <personal></personal>
  </div>
</template>

<script>
import Personal from "@/components/personalcenter/Personal";
export default {
  name: 'App',
  components: {
    Personal
  }
}
</script>

<style>
</style>
