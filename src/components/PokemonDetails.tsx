import { Link } from "react-router-dom";
import { Pokemon } from "../Pokemon";

interface pokemonprop {
  pokemon: Pokemon;
}
const PokemonDetails = (props: pokemonprop) => {
  const { pokemon } = props;
  return (
    <tr className="bg-light">
      <th scope="row">{pokemon.id}</th>
      <td>{pokemon.name}</td>
      <td>{pokemon.color}</td>
      <td>
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
            pokemon.id +
            ".png"
          }
          alt="pokemon-mage"
          className="pok-img"
        />
      </td>
      <td>
        <Link to={`/details/${pokemon.id}`} className="btn btn-primary">
          Show Details
        </Link>
      </td>
    </tr>
  );
};

export default PokemonDetails;
