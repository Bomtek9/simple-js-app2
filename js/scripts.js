//IIFE: Pokemon Repository Listing

let pokemonRepository = (function() {

  let pokemonList =[];

// Link to access the POKEAPI database
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  function add(pokemon) {
      if (
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "detailsUrl" in pokemon
      ) {
          pokemonList.push(pokemon);
      } else {
          console.log("This Pokemon is not correct!");
      }
  }

  function getAll() {
      return pokemonList;
  }

  //Creates the list of Pokemon buttons
  function addListItem(pokemon) {
      let fullList = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      button.classList.add('button-class')
      button.innerText = pokemon.name;
      listItem.appendChild(button);
      fullList.appendChild(listItem);
      button.addEventListener ('click', () => {
          showDetails(pokemon);
      }
  )};

  function showDetails (pokemon) {
      loadDetails(pokemon);
  }

  function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
  }

  function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
          return response.json();
      }).then(function (details) {
          //Item details
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
          showModal(item);
      }).catch(function (e) {
          console.error(e);
      });
      }

      
  
  
    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      loadDetails: loadDetails,
      addListItem: addListItem,
      showDetails: showDetails
    };
})();

/* OLD CODE: Adding a pokemon to the list: */

/* console.log(pokemonRepository.getAll());
pokemonRepository.add({ 
name: 'Ivysaur',
height: 3,
types: ['grass', ' poison']
}); */


// LOADS THE DATA:

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
});



