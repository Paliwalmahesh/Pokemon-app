import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";

export const usePokemon = (numberorid: string) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const fetchPokemon = (numberorid: string) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + numberorid)
      .then(({ data }) => {
        const poke = {
          id: data.id,
          name: data.name as string,
          color: "red",
          height: parseInt(data.height),
          weight: parseInt(data.weight),
          types: data.types.map((type: any) => {
            return type.type.name;
          }),
        };
        setPokemon(poke);
        setIsLoading(false);
        setError(error.message as string);
      })
      .catch((error) => {
        setError(error?.message as string);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchPokemon(numberorid);
  }, [numberorid]);
  console.log(error);
  return { pokemon, isLoading, error };
};
