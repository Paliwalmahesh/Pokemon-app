import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";

export const usePokemons = () => {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const fetchPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then(({ data }) => {
        console.log(data);
        const pokemons: Pokemon[] = data.results.map(
          (pokemon: any, index: number) => {
            return {
              id: index + 1,
              name: pokemon.name as string,
              color: "red",
              height: 0,
              weight: 0,
              types: [],
            };
          }
        );
        setPokemonsList(pokemons);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setPokemonsList([]);
        setError(error?.message as string);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPokemons();
  }, []);
  return { pokemonsList, isLoading, error };
};
