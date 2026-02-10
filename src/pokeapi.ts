import { Cache } from "./pokecache.js";
export type ShallowLocations = {
  next: string | null;
  previous: string | null;
  results: { name: string }[];
};

export type LocationArea = {
  pokemon_encounters: {
    pokemon: {
      name: string;
    };
  }[];
};

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache = new Cache(300000);

  async fetchLocation(locationName: string) {
  const url = `https://pokeapi.co/api/v2/location-area/${locationName}`;

  const cached = this.cache.get(url);
  if (cached) return cached;

  const response = await fetch(url);
  const data = await response.json();

  this.cache.add(url, data);
  return data;
}
  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;
    const cachedData = this.cache.get<ShallowLocations>(url);
    if (cachedData) {
      console.log("(Using cached data...)");
      return cachedData;
    }
    const response = await fetch(url);
    const data = (await response.json()) as ShallowLocations;

    this.cache.add(url, data);
    return data;
  }

  async fetchPokemon(name: string) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const cached = this.cache.get(url);
  if (cached) return cached;
  const response = await fetch(url);
  const data = await response.json();
  this.cache.add(url, data);
  return data;
}
}
