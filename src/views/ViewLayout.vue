<template>
  <div>
      <Nav />
      <router-view />
  </div>
</template>


<script>

import Nav from '@/components/Nav.vue'
export default {
  components: {
    Nav
  },
  data() {
    return {
       
    }
  },
  
}
</script>
