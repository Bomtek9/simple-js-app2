var turtleRepository = (function() {
  let repository = [
    // database of turtles for the turtledex
    {
      name: 'Leonardo',
      height: 5.9,
      types: ['in charge'],
    },
    {
      name: 'Donatello',
      height: 6.6,
      types: ['smart'],
    },
    {
      name: 'Raphael',
      height: 6,
      types: ['angry'],
    },
    {
      name: 'Michaelangelo',
      height: 5.6,
      types: ['funny'],
    },
  ];

  function add(turtle) {
    if (
      typeof turtle === 'object' &&
      'name' in turtle &&
      'height' in turtle &&
      'types' in turtle
    ) {
      repository.push(turtle);
    } else {
      console.log("Turtle is not correct");
    }
  }

  function getAll() {
    return repository;
  }

  function addListItem(turtle) {
    let turtleList = document.querySelector('.turtle-list');
    let listTurtle = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = turtle.name;
    button.classList.add('list-button');
    listTurtle.appendChild(button);
    turtleList.appendChild(listTurtle);
    button.addEventListener('click', function (event) {
      showDetails(turtle);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

document.addEventListener('DOMContentLoaded', function () {
  console.log(turtleRepository.getAll());

  turtleRepository.getAll().forEach(function (turtle) {
    turtleRepository.addListItem(turtle);
  });
});