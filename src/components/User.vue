<template>
  <div class="user">
    <router-link :to="{name: 'UserDetail', params: {id: user.id, name: user.name},}">
      {{user.name}}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  data() {
    return {
    }
  },
}
</script>