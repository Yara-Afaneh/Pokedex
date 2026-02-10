import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  const name = args[0];
  console.log(`Throwing a Pokeball at ${name}...`);

  try {
    const pokemon = await state.pokeAPI.fetchPokemon(name);

    const chance = Math.random() * 500;
    if (chance > pokemon.base_experience) {
      console.log(`${name} was caught!`);
      console.log("You may now inspect it with the inspect command.");
      state.pokedex[name] = pokemon;
    } else {
      console.log(`${name} escaped!`);
    }
  } catch (err) {
    console.log("Could not find that pokemon.");
  }
}
