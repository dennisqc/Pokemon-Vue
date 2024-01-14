<template>
  <p>PQuien es este Pokemon?</p>
  <PokemonPicture :pokemonId="5" showPokemon="true"/>
  <PokemonOptions />
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture";
import getPokemonOptions from '@/pages/helpers/getPokemonOptions'

console.log(getPokemonOptions());

export default {
   


  components: {
    PokemonOptions,
    PokemonPicture,
  },
};
</script>

<style></style>
