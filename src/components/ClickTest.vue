<template>
<button @click="$emit('close')">Click me</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    emits: ['close']

    return {}
  }
})
</script>

<style scoped>

</style>