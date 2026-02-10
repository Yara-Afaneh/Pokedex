import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;           
  nextLocationsURL: string | null; 
  prevLocationsURL: string | null;
  pokedex: Record<string, any>;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...arg:string[]) => void;
};

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const pokeAPI = new PokeAPI();
  return {
    rl,
    commands: getCommands(),
    pokeAPI: pokeAPI,        
    nextLocationsURL: null,
    prevLocationsURL: null,
    pokedex: {},  
  };
}
