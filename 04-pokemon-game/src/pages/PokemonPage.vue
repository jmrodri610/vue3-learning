<template>
<div>
  <h1 v-if="!pokemon">Wait...</h1>
  <div v-else>
    <img src="@/assets/pokeball_PNG8.png" alt="pokeball" class="img-pokeball pokeball">
    <h1>¿Cual es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>
    <div class="fade-in" v-if="showAnswer">
      <h2 v-if="showAnswer">{{showMessage}}</h2>
      <button @click="newGame">Retry</button>
    </div>
  </div>
</div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from '@/helpers/getPokemonOptions';


export default {
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      showMessage: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const choosenPokemon = Math.floor(Math.random()*4)
      this.pokemon = this.pokemonArr[choosenPokemon]
    },
    checkAnswer (pokemonId) {
      this.showPokemon = true

      if(pokemonId === this.pokemon.id) {
        this.showMessage = "Great job!"
      } else {
        this.showMessage = "Nooo! Wrong answer! Try again!"
      }
        this.showAnswer = true
    },
    async newGame() {
      this.showMessage = '';
      this.pokemon = null;
      this.showAnswer = false;
      this.showPokemon = false;
      await this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray();
  }
};
</script>

<style scoped>
  .img-pokeball {
    width: 100px;
    height: 100px;
  }
</style>
