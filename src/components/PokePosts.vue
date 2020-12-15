<template>
  <div>

  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Posts',
  props: {},
  setup () {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    function fetchData(){
      console.log('this is posts')
    }

    onMounted(() => {
      fetchData();
    })

    return {
      data,
      loading,
      error
    }
  }
})
</script>

<style scoped>

</style>