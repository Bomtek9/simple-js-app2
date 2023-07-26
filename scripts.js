let turtleRepository = (function() { //IIFE
    let turtleList = [// database of turtles for the turtledex
  { 
    name: 'Leonardo', 
    height: '5.9',
    types: ['in charge'],
  },
  {
    name: 'Donatello',
    height: '6.6',
    types: ['smart'],
  },
  {
    name: 'Raphael',
    height: '6',
    types: ['angry'],
  },

  {
  name: 'Michaelangelo',
  height: '5.6',
  types: ['funny'],
  }
  ];
  });


  function add(turtle) {
    turtleList.push(turtle);
    };


  function getAll() {
    return turtleList;
    };

 //Put the item in the pokemonList onto the page
  function addListItem(turtle) {
    let turtleList = document.querySelector('.turtle-list');
    let turtleListItem = document.createElement('li');

  //Create button in the list item
  let button = document.createElement('button');
  button.classList.add('list-button');
  button.innerText = turtle.name;
  turtleListItem.appendChild(button);
  turtleList.appendChild(turtleListItem);


  button.addEventListener('click', function () {
    showDetails(turtle);
  });

  }







turtleRepositoryRepository.loadList().then(() => {
  turtleRepositoryRepository.getAll().forEach((turtle) => {
      turtleRepositoryRepository.addListItem(turtle);
  });
});
