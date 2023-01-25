import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemon } from "../Http";
import { Pokemon } from "../Pokemon";

export const PokemonCard = () => {
  const [errormsg, seterrormsg] = useState<String>("");
  const [pokemon, setPokemon] = useState<Pokemon>({
    id: 1,
    name: "",
    color: "",
    height: 0,
    weight: 0,
    types: [],
  });

  const params = useParams();
  const idOrName = params.idOrName ?? "0";

  const fetchPokemonHere = async () => {
    try {
      seterrormsg("");
      const pokemon = await fetchPokemon(`${idOrName}`);

      console.log(idOrName);
      setPokemon(pokemon);
    } catch (error: any) {
      // console.log("erroris:" + error.message);
      seterrormsg(error.message as string);
      //   console.log("error");
      // console.log(errormsg);
    }
  };

  useEffect(() => {
    fetchPokemonHere();
  }, [idOrName]);
  return (
    <>
      {(errormsg == "" && (
        <div className="details-pokemon container my-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt="Card  cap"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Name :{" "}
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </h5>
              <strong
                className="btn"
                style={{ backgroundColor: pokemon.color, color: "white" }}
              >
                Colour :{" "}
                {pokemon.color.charAt(0).toUpperCase() + pokemon.color.slice(1)}
              </strong>
              <br />
              <strong>weight : {pokemon.weight}</strong>
              <br />
              <strong>height : {pokemon.height}</strong>
              <div className="types">
                {pokemon.types &&
                  pokemon.types.map((type: any) => {
                    return (
                      <button className="btn btn-primary mx-1">{type}</button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )) || (
        <div className="alert alert-warning" role="alert">
          {" "}
          {errormsg}
        </div>
      )}
    </>
  );
};
