let turtleList = [// database of pokemon for the pokedex
{ 
    name: 'Leonardo', 
    height: '7',
    types: ['leader'],
},
{
    name: 'Donatello',
    height: '7.5',
    types: ['brains'],
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
]

for (let i = 0; i < turtleList.length; i++) {
    if (turtleList[i].height < 7.1) {
      document.write(
        turtleList[i].name + ':' + ` (Height: ${turtleList[i].height})` + ' - I am the leader!'
      );
    } else {
      document.write(
        turtleList[i].name + ':' + ` (Height: ${turtleList[i].height})` //will type out other turtles not >7.1
      );
    }
    //adds a row space in-between each turtle entry
    document.write('<br> <br>') 
  }

