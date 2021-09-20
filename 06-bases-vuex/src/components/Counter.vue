<template>
  <h1>Counter - Vuex</h1>
  <h2>
    Direct access: <span v-if="isLoading"> Calculating ...</span
    ><span v-else>{{ $store.state.counter.count }}</span>
  </h2>

  <button @click="increment" :disabled="isLoading">+1</button>
  <button @click="incrementedBy(5)" :disabled="isLoading">+5</button>
  <button @click="randomInt" :disabled="isLoading">Random</button>

  <h1>MapState</h1>
  <h2>
    mapstate: <span v-if="isLoading"> Calculating ...</span
    ><span v-else>{{ count }}</span>
  </h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("counter", ["count", "lastMutation", "isLoading"]),
  },
  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
    incrementedBy(value) {
      this.$store.commit("counter/incrementedBy", value);
    },
    ...mapActions("counter", {
      randomInt: "incrementRandomInt",
    }),
  },
};
</script>
