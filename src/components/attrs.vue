<template>
  <label>
    <h1>{{ title }}</h1>
    <input type="text" v-bind="$attrs" v-model="title"/>
  </label>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  setup() {
    const title = ref("Input Test")

    watch(title, (newValue, oldValue) => {
      console.log('The new title value is: ' + title.value);
    })

    return {
      title
    }
  }
})
</script>

<style>

</style>