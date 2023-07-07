let turtlesRepository = (function () {  //IIFE

  let turtlesList = [   // database of turtles for the tmntdex
    {
      name: 'Leonardo', 
      height: 7,
      types: ['leader', 'blue'],
    },
    {
      name: 'Donatello',
      height: 7.5,
      types: ['brains', 'purple'],
    },
    {
      name: 'Raphael',
      height: 7.2,
      types: ['angry', 'red'],
    },
  
    {
      name: 'Michaelangelo',
      height: 6.8,
      types: ['funny', 'orange'],
    }
  ]

  function getAll () {
    return turtlesList;
  } 
  
  function add (turtles) {
    turtlesList.push(turtles);
  }

  return {
    getAll: getAll,
    add: add
  }
})()

document.write(turtlesRepository.getAll())
