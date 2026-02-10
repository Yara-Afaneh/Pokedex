import { State } from "./state.js";

export async function commandInspect(
  state: State,
  ...args: string[]
): Promise<void> {
  if (args.length === 0) {
    console.log("Please provide a pokemon name.");
    return;
  }

  const name = args[0].toLowerCase();

  const pokemon = state.pokedex[name];

  if (!pokemon) {
    try {
      await state.pokeAPI.fetchPokemon(name);
      console.log(`you have not caught ${name} yet!`);
    } catch (err) {
      console.log(`'${name}' is not a valid Pokemon name.`);
    }
    return;
  }
  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);

  console.log("Stats:");
  pokemon.stats.forEach((s: any) => {
    console.log(`  -${s.stat.name}: ${s.base_stat}`);
  });

  console.log("Types:");
  pokemon.types.forEach((t: any) => {
    console.log(`  - ${t.type.name}`);
  });
}
