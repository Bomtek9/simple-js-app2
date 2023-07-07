let turtlesRepository = (function() { //IIFE

let turtleList = [// database of turtles for the turtledex
{ 
    name: 'Leonardo', 
    height: '7',
    types: ['leader'],
},
{
    name: 'Donatello',
    height: '7.5',
    types: ['smart'],
},
{
    name: 'Raphael',
    height: '7.2',
    types: ['angry'],
},

{
  name: 'Michaelangelo',
  height: '7.3',
  types: ['funny'],
}
];

 
return {
  add: function (turtles) {
     turtleList.push(turtles);
  },
  getAll: function () {
     return turtleList;
  },
};
})();


turtlesRepository.getAll().forEach(function (turtles) {
document.write(turtles.name + "is" + turtles.height + "and" + turtles.types);
});