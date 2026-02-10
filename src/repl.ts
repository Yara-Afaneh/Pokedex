import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 0);
}

export function startREPL() {
  const rl = readline.createInterface({ input, output, prompt: "Pokedex> " });
  const commands = getCommands(); 

  rl.prompt();

  rl.on("line", (line) => {
    const words = cleanInput(line);
    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const commandName = words[0];

   
    if (commandName in commands) {
      try {
        commands[commandName].callback(commands);
      } catch (err) {
        console.error("Error executing command:", err);
      }
    } else {
      console.log("Unknown command");
    }

    rl.prompt();
  });
}
