
const pokemonRepository = (() => {
    let pokemonList = [];
  
    const getAll = () => {
      return pokemonList;
    };
  
    const add = (item) => {
      pokemonList.push(item);
    };
  
    add({ name: "pokeXuxu", height: 7, types: ['grass', 'poison'] });
    add({ name: "pokeBubu", height: 5, types: ['rock', 'juice'] });
    add({ name: "pokeTomy", height: 10, types: ['sand', 'water'] });
  
    return {
      getAll: getAll,
      add: add
    };
  })();
  
  // Usage examples:
  console.log(pokemonRepository.getAll()); // Output: Array containing all the Pokémon objects
  pokemonRepository.add({ name: "pokeDodo", height: 4, types: ['fire', 'flying'] }); // Adding a new Pokémon
  console.log(pokemonRepository.getAll()); // Output: Updated array with the new Pokémon

// forEach iteration containing a conditional 
pokemonRepository.getAll().forEach(pokemon => {
    if (pokemon.height > 7) {
      document.write("<b><span class='winner'>" + pokemon.name + " (height:" + pokemon.height + ") - Wow, that's big!" + "</b></span>" + "<br>");
    } else {
      document.write(pokemon.name + " (height:" + pokemon.height + ")" + "<br>");
    }
  });