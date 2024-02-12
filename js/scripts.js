// empty array creation
let pokemonList = [];

// assigning elements to the array
pokemonList[0] = {name:"pokeXuxu", height:7, types:['grass', 'poison'],}; 
pokemonList[1] = {name:"pokeBubu", height:5, types:['rock', 'juice'],}; 
pokemonList[2] = {name:"pokeTomy", height:10, types:['sand', 'water'],}; 

// for loop containing a conditional 
for (let i = 0; i < pokemonList.length; i++) {
    
    if (pokemonList[i].height>7){
        document.write("<b><span class='winner'>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") - Wow, that's big!" + "</b></span>" + "<br>");
        
    } else {
        document.write(pokemonList[i].name + " (height:" + pokemonList[i].height + ")" + "<br>"); 
    }
}