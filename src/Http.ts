import axios from "axios"
import { Pokemon } from "./Pokemon"

function getRandomColor() :string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
export const fetchPokemons =  async () : Promise<Pokemon[]> => {
    
 const{ data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20");

 const pokemons:Pokemon[] = data.results.map((pokemon: any, index: number) => {
    return {
        id:index+1,
        name : pokemon.name,
        color : getRandomColor(),
        type:[getRandomColor(),getRandomColor(),getRandomColor()],
        power: 0,
    }
 }
 );
 return pokemons;
}

export const fetchPokemon =  async (numberorid :string): Promise<Pokemon> => {
    console.log(numberorid)
 const{ data } = await axios.get("https://pokeapi.co/api/v2/pokemon/" +numberorid);

    return { 
        id: data.id,
        name : data.name as string,
        color : getRandomColor(),
        height: parseInt(data.height),
        weight: parseInt(data.weight),
        types: data.types.map((type:any) => {
            
            return type.type.name
        }),
    }
 
}