import { type State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  try {
    const locationData = await state.pokeAPI.fetchLocations(state.nextLocationsURL || undefined);
    state.nextLocationsURL = locationData.next;
    state.prevLocationsURL = locationData.previous;


    locationData.results.forEach((loc) => {
      console.log(loc.name);
    });
  } catch (err) {
    console.error("Connection error");
  }
}