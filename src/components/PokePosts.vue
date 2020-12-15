<template>
  <ul v-if="!loading && data && data.length">
    <li v-for="post of data" :key="post.index" class="poke-list">
      <img src="../assets/pokeball.jpg" class="pokeball">
      {{ post.name }}
    </li>
  </ul>
  <p v-if="loading">Loading...</p>
  <p v-if="error">Error!</p>
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
      loading.value = true;

      return fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(res => {
          // a non-200 response code
          if (!res.ok) {
            const error = new Error(res.statusText);
            throw error;
          }

          return res.json();
        })
        .then(json => {
          data.value = json.results;
        })
        .catch(err => {
          if (err.json) {
            return err.json.then(json => {
              error.value.message = json.message;
            })
          }
        })
        .then(() => {
          loading.value = false;
        })
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
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pokeball {
  height: 32px;
  position: relative;
  top: 10px;
}
</style>