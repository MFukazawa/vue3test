<template>
  <label>
    <h1>{{ title }}</h1>
    <input type="text" v-bind="$attrs" v-model="title"/>
  </label>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const title = ref("Input Test")
    return {
      title
    }
  }
})
</script>

<style>

</style>