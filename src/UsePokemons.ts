import axios from "axios";
import { url } from "inspector";
import { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";

export const usePokemons = (url: string) => {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const fetchPokemons = (url: string) => {
    setIsLoading(true);
    axios
      .get(url)
      .then(({ data }) => {
        const pokemons: Pokemon[] = data.results.map(
          (pokemon: any, index: number) => {
            return {
              id: +pokemon?.url?.split("/").slice(-2, -1)[0] || index + 1,
              name: pokemon.name as string,
              color: "red",
              height: 0,
              weight: 0,
              types: [],
            };
          }
        );
        setPokemonsList([...pokemons]);
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
    console.log("ure ", url);
    fetchPokemons(url);
  }, [url]);
  return { pokemonsList, isLoading, error };
};
