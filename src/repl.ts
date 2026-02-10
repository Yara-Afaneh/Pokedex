import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 0);
}

export function startREPL(state: State) {
  state.rl.setPrompt("Pokedex> ");
  state.rl.prompt();

  state.rl.on("line", async (line) => {
    const words = cleanInput(line);
    if (words.length === 0) {
      state.rl.prompt();
      return;
    }

    const commandName = words[0];
    const args = words.slice(1);

    if (commandName in state.commands) {
      try {
        await state.commands[commandName].callback(state,...args);
      } catch (err) {
        console.error("Error executing command:", err);
      }
    } else {
      console.log("Unknown command");
    }

    state.rl.prompt();
  });
}
