
import type { CLICommand } from "./commands.js";

export function commandHelp(commands: Record<string, CLICommand>) {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");
  
  for (const name in commands) {
    console.log(`${name}: ${commands[name].description}`);
  }
}