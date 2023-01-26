import { useState, useEffect } from "react";
// import { pokemon } from "./Pokemon";
import PokemonDetails from "./components/PokemonDetails";
import { fetchPokemons } from "./Http";
import { Pokemon } from "./Pokemon";
import "./index.css";
import { usePokemons } from "./UsePokemons";

const App = () => {
  const { pokemonsList, isLoading, error } = usePokemons();

  return (
    <>
      <div className="container mx-auto my-5">
        <table className="table border border-success">
          <thead>
            <tr className="bg-dark">
              <th scope="col" className="text-white">
                id
              </th>
              <th scope="col" className="text-white">
                Name
              </th>
              <th scope="col" className="text-white">
                Color
              </th>
              <th scope="col" className="text-white">
                Image
              </th>
              <th scope="col" className="text-white">
                Button
              </th>
            </tr>
          </thead>
          <tbody>
            {pokemonsList && pokemonsList.length > 0 ? (
              pokemonsList.map((pok, index) => {
                return <PokemonDetails pokemon={pok} index={index} />;
              })
            ) : (
              <tr>
                <td>{error}</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* <PokemonCard pokemons={pokemons} cpokemon={cpokemon} /> */}
      </div>
    </>
  );
};

export default App;
