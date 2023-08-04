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

      //Displays the Modal with Pokemon
      function showModal (pokemon) {
          let modalContainer = document.querySelector ('#modal-container');
        
          //Clear all existing modal content
          modalContainer.innerHTML = '';
          let modal = document.createElement('div');
          modal.classList.add('modal');
        
          //Add new modal content
          let closeButtonElement = document.createElement('button');
          closeButtonElement.classList.add('modal-close');
          closeButtonElement.innerText = 'X';
          closeButtonElement.addEventListener('click', hideModal);
        
          let titleElement = document.createElement('h1');
          titleElement.innerText = pokemon.name;

          let imageElement = document.createElement('img');
          imageElement.classList.add('modal-img');
          imageElement.src = pokemon.imageUrl
        
          let contentElement = document.createElement('p');
          contentElement.innerText = 'HEIGHT:  ' + pokemon.height;

          let typesElement = document.createElement('p');
          typesElement.innerText = 'TYPES: ' + pokemon.types;
        
          modal.appendChild(closeButtonElement);
          modal.appendChild(imageElement);
          modal.appendChild(titleElement);
          modal.appendChild(contentElement);
          /* modal.appendChild(typesElement); */
          modalContainer.appendChild(modal);
          
          modalContainer.classList.add ('is-visible');
        
          modalContainer.addEventListener('click', (e) => {
            // Since this is also triggered when clicking INSIDE the modal
            // We only want to close if the user clicks directly on the overlay
            let target = e.target;
            if (target === modalContainer) {
              hideModal();
            }
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



// ------- BELOW IS THE NEW CODE (1.8) FOR ADDING THE MODAL --------



let dialogPromiseReject; //Set this later

function hideModal () {
let modalContainer = document.querySelector ('#modal-container');
modalContainer.classList.remove('is-visible');

if (dialogPromiseReject) {
dialogPromiseReject();
dialogPromiseReject = null;
}

}

/*   function showDialog (title, text) {
showModal(title, text);

//Define modalContainer
let modalContainer = document.querySelector('#modal-container');

//Add confirm and cancel buttons
let modal = modalContainer.querySelector('.modal');

let confirmButton = document.createElement('button');
confirmButton.classList.add('modal-confirm');
confirmButton.innerText = 'CONFIRM';

let cancelButton = document.createElement('button');
cancelButton.classList.add('modal-cancel');
cancelButton.innerText = 'CANCEL';

modal.appendChild(confirmButton);
modal.appendChild(cancelButton);

//Focus Confirm button so that user can simply press enter
confirmButton.focus();

//Return a promise that resolves/rejects
return new Promise((resolve, reject) => {
cancelButton.addEventListener('click',
  hideModal);
confirmButton.addEventListener('click', () => {
  dialogPromiseReject = null; //Reset this
  hideModal();
  resolve();
});

//This is used to reject from other functions
dialogPromiseReject = reject;
});

} */

window.addEventListener('keydown', (e) => {
let modalContainer = document.querySelector('#modal-container');
if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
hideModal();
}
});

/*   
document.querySelector('#show-modal').addEventListener('click', () => {
showModal();
});
*/
/*   document.querySelector('#show-dialog').addEventListener('click', () => {
showDialog('Confirm Action', 'Would you like to confirm?').then(function () {
alert('Confirmed!');
}, () => {
alert('Not Confirmed...');
});
}); */
