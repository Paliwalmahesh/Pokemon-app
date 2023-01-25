import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { pokemons } from "../Http";

// interface IPokemonCardProps {
//   pokemons: Pokemon[];
//   cpokemon: number;
// }

// export const PokemonCard = (props: IPokemonCardProps) => {
//   const { pokemons, cpokemon } = props;
//   return (
//     <>
//       {pokemons.length > 0 && (
//         <div className="details-pokemon">
//           <div className="card" style={{ width: "18rem" }}>
//             <img
//               className="card-img-top"
//               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[cpokemon].id}.png`}
//               alt="Card  cap"
//               style={{ objectFit: "cover" }}
//             />
//             <div className="card-body">
//               <h5 className="card-title">{pokemons[cpokemon].name}</h5>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

export const PokemonCard = () => {
  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);
  //   const params = useParams();
  //   const id = parseInt(params["id"]);
  //   console.log(params["id"]);
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
