import { useState, useEffect } from "react";
import { PokemonCard } from "./components/PokemonCard";
// import { pokemon } from "./Pokemon";
import PokemonDetails from "./components/PokemonDetails";
import { fetchPokemons } from "./Http";
import { Pokemon } from "./Pokemon";
import "./index.css";

const App = () => {
  const [cpokemon, setcpokemon] = useState(0);
  // const handleEvent = () => {
  //   setcpokemon(cpokemon + 1)
  // }
  const [pokemons, setpokemons] = useState<Pokemon[]>([]);
  const fetchPokemonAsync = async () => {
    try {
      const res = await fetchPokemons();
      setpokemons(res);
    } catch (errormsg) {
      console.error(errormsg);
    }
  };

  useEffect(() => {
    fetchPokemonAsync();
  }, []);

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
                Power
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
            {pokemons.length > 0 ? (
              pokemons.map((pok, index) => {
                return (
                  <PokemonDetails
                    pokemon={pok}
                    index={index}
                    handleEvent={setcpokemon}
                  />
                );
              })
            ) : (
              <tr>
                <td>error</td>
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
