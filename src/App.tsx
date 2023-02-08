import { useState, useEffect } from "react";
// import { pokemon } from "./Pokemon";
import PokemonDetails from "./components/PokemonDetails";
import { fetchPokemons } from "./Http";
import { Pokemon } from "./Pokemon";
import "./index.css";
import { usePokemons } from "./UsePokemons";

const App = () => {
  const [currentpage, setCurrentPage] = useState<number>(1);
  const [noOfPokemonPerPage, setNoOfPokemonPerPage] = useState<number>(5);
  // const noOfPokemonPerPage: number = 5;
  const [url, setUrl] = useState<string>("");

  const { pokemonsList, isLoading, error } = usePokemons(url);
  const onPrevPageClickHandler = () => {
    if (currentpage !== 1) {
      setCurrentPage((pevCurrentPage) => {
        return pevCurrentPage - 1;
      });
    }
  };

  const onNextPageClickHandler = () => {
    setCurrentPage((pevCurrentPage) => {
      return pevCurrentPage + 1;
    });
  };

  const getUrl = () => {
    return `https://pokeapi.co/api/v2/pokemon/?limit=${noOfPokemonPerPage}&offset=${
      (currentpage - 1) * noOfPokemonPerPage
    }`;
  };

  useEffect(() => {
    setUrl(getUrl());
  }, [currentpage]);

  useEffect(() => {
    if (currentpage === 1) {
      setUrl(getUrl());
    } else {
      setCurrentPage(1);
    }
  }, [noOfPokemonPerPage]);

  return (
    <>
      <div className="container mx-auto my-5">
        <select
          onChange={(e) => {
            setNoOfPokemonPerPage(+e.target.value);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        {isLoading ? (
          <div>Loading Pokemons...</div>
        ) : pokemonsList?.length ? (
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
                  return <PokemonDetails pokemon={pok} key={index} />;
                })
              ) : (
                <tr>
                  <td>{error}</td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <div>Pokemons Not found</div>
        )}
        {/* <PokemonCard pokemons={pokemons} cpokemon={cpokemon} /> */}
        <button
          className="brn btn-primary"
          disabled={currentpage === 1}
          onClick={onPrevPageClickHandler}
        >
          Previous
        </button>
        {}
        <button className="brn btn-primary" onClick={onNextPageClickHandler}>
          Next
        </button>
      </div>
    </>
  );
};

export default App;
