let pokemonList = [// database of pokemon for the pokedex
{ 
    name: 'Bulbasur', 
    height: '7',
    types: ['grass','poison'],
},
{
    name: 'Pikachu',
    height: '12',
    types: ['electric'],
},
{
    name: 'Charmander',
    height: '6',
    types: ['fire'],
}
]

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 7) {
      document.write(
        pokemonList[i].name + ':' + ` (Height: ${pokemonList[i].height})` + ' - WOW, that\'s a big one!'
      );
    } else {
      document.write(
        pokemonList[i].name + ':' + ` (Height: ${pokemonList[i].height})` //will type out other pokemon now >7
      );
    }
    //adds a row space in-between each pokemon entry
    document.write('<br> <br>') 
  }

