<template>
  <div>
    <div>
      {{ title }}
    </div>
    <div>
      {{ contents }}
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'this is title'
    },
    contents: {
      type: String,
      default: 'this is contents'
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>