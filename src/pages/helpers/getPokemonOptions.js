const getPokemons = () => {
  const pokemonArr = Array.from(Array(650));

  return pokemonArr.map((_, index) => index + 1);
};

const getPokemonOptions = () => {
  const micedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  console.log(getPokemons());
};

const getPokemonNames = (pokemons =[] ) => {
    console.log(pokemons);
}

export default getPokemonOptions;
