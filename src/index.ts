import { getPokemon } from "./generics/getPokemon";

getPokemon(1).then(resp => console.log(resp))
            .catch(error => console.log(error)) 
            .finally(()=> console.log('Fin de GetPokemon'))