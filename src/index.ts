// import { getPokemon } from "./generics/getPokemon";

// getPokemon(1).then(pokemon => console.log(pokemon.sprites.front_default))
//             .catch(error => console.log(error)) 
//             .finally(()=> console.log('Fin de GetPokemon'))

import { Pokemon } from "./decorators/pokemon-clas";

const charmander = new Pokemon('Charmander');

console.log(charmander.savePokemonToDB(900));

