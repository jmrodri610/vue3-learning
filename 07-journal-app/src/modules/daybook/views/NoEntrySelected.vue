<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">There is nothing selected</h1>
    <Fab @on:click="createNewEntry" favIcon="fa-plus" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  methods: {
    createNewEntry() {
      this.$router.push({ name: 'entry', params: { id: 'new' } });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
