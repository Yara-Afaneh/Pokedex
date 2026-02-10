import { State } from "./state.js";

export async function commandCatch(
  state: State,
  ...args: string[]
): Promise<void> {
  if (args.length === 0) {
    console.log("Error: You must provide a pokemon name.");
    return;
  }

  const pokemonName = args[0];

  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  try {
    const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);

    const catchChance = Math.random() * pokemon.base_experience;
    const threshold = 70;

    if (catchChance < threshold) {
      console.log(`${pokemonName} was caught!`);
      state.pokedex[pokemonName] = pokemon;
    } else {
      console.log(`${pokemonName} escaped!`);
    }
  } catch (err) {
    console.log("Could not find that pokemon. Check the spelling!");
  }
}
