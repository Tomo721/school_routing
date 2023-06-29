<template>
  <div class="user">
    ID: {{id}} | Name: {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Какое-то имя'
    },
    id: {
      type: Number,
    }
  },
  data() {
    return {
    }
  },
  // computed: {
  //   id() {
  //     return this.$route.params.id
  //   },
  //   name() {
  //     return this.$route.params.name
  //   }
  // }
}
</script>