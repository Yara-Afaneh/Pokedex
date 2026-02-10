import { type State } from "./state.js";
export async function commandMapb(state: State) {
  if (!state.prevLocationsURL) {
    console.log("you're on the first page");
    return;
  }
  const data = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
  state.nextLocationsURL = data.next;
  state.prevLocationsURL = data.previous;

  data.results.forEach(loc => console.log(loc.name));
}