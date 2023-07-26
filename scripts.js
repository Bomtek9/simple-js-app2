let turtlesRepository = (function() { //IIFE

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
document.write(turtles.name + " is " + turtles.height + " feet tall and " + turtles.types);
document.write('<br> <br>') 
});