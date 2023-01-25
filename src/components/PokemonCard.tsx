import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemons } from "../Http";
import { Pokemon } from "../Pokemon";

export const PokemonCard = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemonsHere = async () => {
    const pokemons = await fetchPokemons();
    setPokemons(pokemons);
  };

  useEffect(() => {
    fetchPokemonsHere();
  }, []);

  const params = useParams();
  const id = parseInt(params.id ?? "0");
  return (
    <>
      {(id < pokemons.length && (
        <div className="details-pokemon">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[id].id}.png`}
              alt="Card  cap"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{pokemons[id].name}</h5>
            </div>
          </div>
        </div>
      )) || <div> "enter Valid id wchich id less then {pokemons.length}</div>}
    </>
  );
};
