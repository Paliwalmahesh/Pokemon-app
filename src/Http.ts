
import { Pokemon } from "./Pokemon"

export const pokemons : Pokemon[] = [{
    id : 1,
    name : 'pikachu',
    color : 'yellow',
    power: 20,
},
{
    id : 2,
    name : 'pikachu2',
    color : 'red',  
},
{
    id : 3,
    name : 'pikachu3',
    color : 'lightblue',
    power : 30,
}]

export const fetchPokemons = () : Promise<Pokemon[]> => {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(pokemons)
        }, 2000)

        // reject("Error") 
    })
}