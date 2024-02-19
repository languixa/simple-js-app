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
    const pokemonDetails = `${pokemon.name} ${pokemon.height} ${pokemon.types}`;
    document.getElementById("p1").innerHTML = pokemonDetails;
  }

  add({ name: "pokeXuxu", height: 7, types: ['grass', 'poison'] });
  add({ name: "pokeBubu", height: 5, types: ['rock', 'juice'] });
  add({ name: "pokeTomy", height: 10, types: ['sand', 'water'] });

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
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

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(pokemon => {
    pokemonRepository.addListItem(pokemon);
  });
});