import axios from "axios"
import { Pokemon } from "./Pokemon"


export const fetchPokemons =  async () : Promise<Pokemon[]> => {
    // console.log("fetch/ pokemons");
 const{ data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20");
//  console.log(data);
 const pokemons:Pokemon[] = data.results.map((pokemon: any, index: number) => {
    return {
        id:index+1,
        name : pokemon.name,
        color : "red",
        power: 0,
    }
 }
 );
 return pokemons;
}