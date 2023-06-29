<template>
  <div>
    <div v-for="user in users" :key="user.id">
      <User :user="user" />
    </div>

  </div>
</template>


<script>
import User from '@/components/User.vue'

export default {
  components: {
    User
  },
  data() {
    return {
        users: [
            {id: 1, name: 'Первый юзер'},
            {id: 2, name: 'Второй юзер'},
            {id: 3, name: 'Третий юзер'},
        ]
    }
  },
}
</script>
