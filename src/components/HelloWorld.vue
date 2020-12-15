<template>
  <h1>{{ msg }}</h1>
  <button @click="increase">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <attrs id="attrs-id" class="class-test">Attrs component</attrs>
  <a href="/posts">
    Click to go to Posts page
  </a>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import attrs from "./attrs.vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const count = ref(0);

    const increase = () => {
      count.value++;
    };

    return {
      count,
      increase,
    };
  },
  components: {
    attrs,
  },
});
</script>

<style scoped>
.class-test {
  /* border: 1px solid red; */
  background-color: red;
  padding: 3rem;
  display: block;
}
</style>
