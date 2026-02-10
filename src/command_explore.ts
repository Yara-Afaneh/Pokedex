import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  const name = args[0]; 
  
  console.log(`Exploring ${name}...`);
  
  const data = await state.pokeAPI.fetchLocation(name);
  
  console.log("Found Pokemon:");

  for (const item of data.pokemon_encounters) {
    console.log(` - ${item.pokemon.name}`);
  }
}