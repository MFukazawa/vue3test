<template>
  <div>
    <!-- <p>{{ text }}</p> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, h, onMounted } from 'vue'

export default defineComponent({
  setup () {
    const text = reactive({ text: 'reactive default text'})

    const changeText = () => {
      setTimeout(() => {
        text.text = 'timeout text'
      }, 3000)
    }

    onMounted(() => {
      changeText();
    })

    return () => h('h1', [text.text])
  }
})
</script>

<style scoped>

</style>