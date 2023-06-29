<template>
  <div>

    <slot name="slotUser" :user="user">{{user.name}}</slot>

    <!-- пример с именем слота -->
    <!-- <header>
      <slot name="header"></slot>
    </header>
    <div>
      <slot></slot>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {
        name: 'Имя пользователя',
        id: 3
      }
    }
  }
}
</script>
