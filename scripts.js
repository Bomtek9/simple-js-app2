// Creating an IIFE (Immediately Invoked Function Expression) to encapsulate the code and avoid polluting the global scope.
var turtleRepository = (function() {
  // Array containing the database of turtles for the turtledex
  let repository = [
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

  // Function to add a turtle to the repository if it has the required properties
  function add(turtle) {
    if (
      typeof turtle === 'object' &&
      'name' in turtle &&
      'height' in turtle &&
      'types' in turtle
    ) {
      repository.push(turtle);
    } else {
      // If the turtle object is missing required properties, log an error message
      console.log("Turtle is not correct");
    }
  }

  // Function to retrieve all turtles from the repository
  function getAll() {
    return repository;
  }

  // Function to add a list item (button representing a turtle) to the HTML page
  function addListItem(turtle) {
    let turtleList = document.querySelector('.turtle-list');
    let listTurtle = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = turtle.name;
    button.classList.add('list-button');
    listTurtle.appendChild(button);
    turtleList.appendChild(listTurtle);
    // Add a click event listener to the button to show details of the clicked turtle
    button.addEventListener('click', function (event) {
      showDetails(turtle.height );
    });
  }

  function showDetails(turtle) {
    // Check if the 'types' property exists and is an array
    if (turtle.types && Array.isArray(turtle.types)) {
      console.log(turtle.name + ' - ' + turtle.height + ' - ' + turtle.types.join(', '));
    } else {
      // Handle the case where 'types' is missing or not an array
      console.log(turtle.name + ' - ' + turtle.height + ' - Types information missing or invalid.');
    }
  }

  // Expose public methods to the outside world using the revealing module pattern
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

// Execute code when the DOM has finished loading
document.addEventListener('DOMContentLoaded', function () {
  // Log all the turtles in the repository to the console
  console.log(turtleRepository.getAll());

  // For each turtle in the repository, add a corresponding list item (button) to the HTML page
  turtleRepository.getAll().forEach(function (turtle) {
    turtleRepository.addListItem(turtle);
  });
});
