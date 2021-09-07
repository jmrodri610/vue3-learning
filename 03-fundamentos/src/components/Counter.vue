<template>
  <h2>{{title}}</h2>
  <p>{{counter}}<sub>2</sub> = {{squaredCounted}}</p>

  <div>
      <button v-on:click="decrease">-1</button>
      <button @click="increase">+1</button>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Counter'
        },
        start: {
            type: Number,
            default: 10,
            validator (value) {
                return value >= 0
            }
        },
    },
    name: 'Counter',

    data() {
        return {
            counter: this.start,
        }
    },
    methods:{
        increase() {
            ++this.counter
        },
        decrease() {
            --this.counter
        }
    },
    computed: {
        squaredCounted() {
            return this.counter * this.counter
        }
    }
}
</script>

<style>
button {
    background-color: #64BB87;
    border-radius: 5px;
    color: white;
    margin: 0 5px;
}

</style>