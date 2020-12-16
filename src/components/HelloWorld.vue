<template>
  <h1>{{ msg }}</h1>
  <button @click="increase">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <h1>$Attrs</h1>
  <attrs id="attrs-id" class="class-test">Attrs component</attrs>
  <h1>Posts API</h1>
  <a href="/posts">
    Click to go to Posts page
  </a>
  <h1>Render</h1>
  <render />
  <h1>V Model</h1>
  <VModel v-model:title="pageTitle" v-model:contents="pageContents" />
  <input v-model="pageTitle" />

  <h1>Click test</h1>
  <ClickTest @click="clickerMethod" @close="closerMethod" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import attrs from "./attrs.vue";
import render from "./render.vue";
import VModel from "./VModel.vue";
import ClickTest from "./ClickTest.vue";

export default defineComponent({
  components: {
    attrs,
    render,
    VModel,
    ClickTest
  },
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const count = ref<number>(0);

    const increase = () => {
      count.value++;
    };

    const pageTitle = ref<string>('new page title');
    const pageContents = ref<string>('new page contents');

    const clickerMethod = () => {
      alert('this is a click test!')
    };
    const closerMethod = () => {
      console.log('closed!!')
    };

    return {
      count,
      increase,
      pageTitle,
      pageContents,
      clickerMethod,
      closerMethod
    };
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
