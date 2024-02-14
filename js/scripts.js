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
    add: add,
    
  };
})();


(function addListItem(pokemon){
  const objectArray = pokemonRepository.getAll();
  
  for (let i = 0; i < objectArray.length; i++) {
  
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = objectArray[i].name; // Set the text of the button to the Pokémon name
  button.classList.add('btn');
  document.body.appendChild(listItem)
  listItem.appendChild(button); // Append the button element to the list item 
}

})();

(function showDetails() {
  const buttons = document.querySelectorAll('button');
  const objectArray = pokemonRepository.getAll();

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener('click', function() {
      // Get the innerText value of the clicked button
      const buttonText = objectArray[i].name;

      // Write the innerText value of the button to the document
      document.getElementById("p1").innerHTML = objectArray[i].name + " " + objectArray[i].height + " " + objectArray[i].types;
    });
  }
})();

