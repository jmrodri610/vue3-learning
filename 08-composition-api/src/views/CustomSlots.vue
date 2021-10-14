<template>
  <h1>Slots</h1>
  <button @click="openModal" class="btn btn-primary">Open modal</button>

  <modal v-if="isOpen" @on:close="closeModal" title="Hola mundo">
    <template v-slot:header>
      <h2>Modal title</h2>
    </template>
    <template v-slot:footer>
      <button class="btn btn-primary" @click="closeModal">Close modal</button>
    </template>
    <template v-slot:body>
      <p>Modal text is shown here</p>
    </template>
    <template v-slot:exposed="{ newTitle }">
      <h2>{{newTitle}}</h2>
    </template>
  </modal>
</template>

<script>
import Modal from "@/components/Modal";

import { ref } from "vue";

export default {
  components: {
    Modal,
  },
  setup() {
      
      const isOpen = ref(false);

      return {
          isOpen,
          openModal: ()=> isOpen.value = true,
          closeModal: ()=> isOpen.value = false
      }
  },
};
</script>

<style></style>
