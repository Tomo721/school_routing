<template>
  <div class="slots">
    <p>страница со слотами</p>
    
    <!-- с ограниченной область видимости -->
    <SlotsTest>
      <template #slotUser="slotProps">
        {{slotProps.user.name}}
      </template>
    </SlotsTest>


    <!-- пример с именем слота -->
    <!-- <SlotsTest>
      <template v-slot:header>текст в header</template>
      <template v-slot:default>текст в середине</template>
      <template v-slot:footer>текст в footer</template>
    </SlotsTest> -->
  </div>
</template>

<script>
import SlotsTest from '@/components/SlotsTest.vue'
import ExComp from '@/components/ExComp.vue'
import Nav from '@/components/Nav.vue'

export default {
  components: {
    SlotsTest,
    ExComp,
    Nav
  },
  data() {
    return {
   
    }
  }
}
</script>