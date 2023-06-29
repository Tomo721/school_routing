<template>

  <div id="app">
    <router-view />
  </div>

</template>

<script>

export default {
  data() {
    return {
    }
  },
  
  mounted() {
    // this.$router.push('dinamic')
    // this.$router.push({name: 'Dinamic'})
    // this.$router.push({name: 'Dinamic', params: {id: 3, name: "имя"}})

    // this.$router.go(-1)
    // this.$router.go(1)
    // this.$router.go(3)
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
