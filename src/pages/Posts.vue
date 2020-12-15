<template>
  <div>
    <h1>posts page</h1>
    <PokePosts />
    <a href="/">Home 🏠</a>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import PokePosts from '../components/PokePosts.vue'

  export default defineComponent({
    setup() {
      return {};
    },
    components: {
      PokePosts
    }
  });
</script>

<style scoped></style>
