<template>
    <div class="nav">
      <router-link to="/dinamic">Динамик</router-link> |
      <router-link to="/slots">Слоты</router-link>
    </div>
</template>

<script>

export default {
  
  data() {
    return {
    }
  },
}
</script>


<style lang="scss" scooped>
  .nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-active {
        color: #42b983;
      }
    }
  }
</style>

