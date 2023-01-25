export interface Pokemon {
    id : number,
    name : string,
    color : string,
    power?: number,
}

export const pokemon : Pokemon[] = [{
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