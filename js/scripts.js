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


  pokemonRepository.getAll().forEach((pokemon, index) => {
    const pokemonListElement = document.querySelector('.pokemon-list');
   
    // new
    const objectArray = pokemonRepository.getAll();
   
   
     let listItem = document.createElement('li');
   
   
     let button = document.createElement('button');
    
   
   
     button.innerText = pokemon.name; // Set the text of the button to the Pokémon name
     button.classList.add('btn');
   
   
    // Assign a click event listener to the button
    button.addEventListener('click', function() {
     // Display a message identifying the clicked button
     // document.write(`Button ${index + 1} clicked`);
     document.getElementById("p1").innerHTML = objectArray[index].name + " " + objectArray[index].height + " " + objectArray[index].types;
   
   });
   
   
   
     listItem.appendChild(button); // Append the button element to the list item
     pokemonListElement.appendChild(listItem); // Append the list item to the main list
    });
   