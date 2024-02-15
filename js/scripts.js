const pokemonRepository = (() => {
  let pokemonList = [];

  const getAll = () => {
    return pokemonList;
  };

  const add = (item) => {
    pokemonList.push(item);
  };


  const addListItem = (pokemon) => {
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name; // Set the text of the button to the Pokémon name
    button.classList.add('btn');
    document.body.appendChild(listItem)
    listItem.appendChild(button); // Append the button element to the list item 
  
    button.addEventListener('click', function() {
      showDetails(pokemon);
  });
  
  }


  const showDetails = (pokemon) => {
    const pokemonDetails = pokemon.name + " " + pokemon.height + " " + pokemon.types;
    document.getElementById("p1").innerHTML = pokemonDetails;  
    }


  add({ name: "pokeXuxu", height: 7, types: ['grass', 'poison'] });
  add({ name: "pokeBubu", height: 5, types: ['rock', 'juice'] });
  add({ name: "pokeTomy", height: 10, types: ['sand', 'water'] });

  return {
    getAll: getAll,
    add: add,
    addListItem
  };
})();


pokemonRepository.getAll().forEach(pokemon => {
  pokemonRepository.addListItem(pokemon);
});





