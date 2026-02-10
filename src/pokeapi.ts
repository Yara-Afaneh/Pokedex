export type ShallowLocations = {
  next: string | null;     
  previous: string | null; 
  results: { name: string }[]; 
};

export class PokeAPI {
  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || "https://pokeapi.co/api/v2/location-area";
    const response = await fetch(url); 
    return await response.json();      
  }
}