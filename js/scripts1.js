const pokemonRepository = (() => {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  const getAll = () => {
    return pokemonList;
  };

  const add = (item) => {
    pokemonList.push(item);
  };

  const addListItem = (pokemon) => {
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn');
    document.body.appendChild(listItem);
    listItem.appendChild(button);

    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  const showDetails = (pokemon) => {
    loadDetails(pokemon)
      .then(() => {
        // Show Pokémon details in a modal
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
          <h2>${pokemon.name}</h2>
          <p>Height: ${pokemon.height}</p>
          <img src="${pokemon.imageUrl}" alt="Pokemon Image">
        `;
        document.body.appendChild(modal);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Other existing functions remain unchanged

  /*
  add({ name: "pokeXuxu", height: 7, types: ['grass', 'poison'] });
  add({ name: "pokeBubu", height: 5, types: ['rock', 'juice'] });
  add({ name: "pokeTomy", height: 10, types: ['sand', 'water'] });
  */

  function loadList() {
    return fetch(apiUrl)
      .then(response => response.json())
      .then(json => {
        json.results.forEach(item => {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(response => response.json())
      .then(details => {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(error => {
        console.error(error);
      });
  }



  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };

})();

pokemonRepository.loadList().then(() => {
  pokemonRepository.getAll().forEach(pokemon => {
    pokemonRepository.addListItem(pokemon);
  });
});