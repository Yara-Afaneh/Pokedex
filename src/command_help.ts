import { State } from "./state.js";

export function commandHelp(state:State) {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");
  
  for (const name in state.commands) {
    console.log(`${name}: ${state.commands[name].description}`);
  }
}