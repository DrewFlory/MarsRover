// Rover Object Goes Here
// ======================
var rover = {
  direction: 'North',
  position: [0,0],
};

//Grid
var grid = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]

//Direction Functions
function moveForward(rover){
  switch(rover.direction) {
    case "North":
    rover.position[0]++
    break;

    case "East":
    rover.position[1]++
    break;

    case "South":
    rover.position[0]--
    break;

    case "West":
    rover.position[1]--
    break;
  };
  console.log("Rover position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}
// moveForward(rover)
// console.log(rover)

function rotateRight(rover){
  // console.log(rover)
  switch(rover.direction) {
    case "North":
       rover.direction = "East";
       break;

    case "East":
      rover.direction = "South";
      break;

    case "South":
      rover.direction = "West";
      break;

    case "West":
      rover.direction = "North";
      break;
  };
  console.log("Rover Position: " + rover.direction);
}
rotateRight(rover)

console.log(rover)


function rotateLeft(rover){
  switch(rover.direction) {
    case "North":
      rover.direction = "West";
      break;
    
    case "East":
      rover.direction = "North";
      break;

    case "South":
      rover.direction = "East";
      break;

    case "West":
      rover.direction = "South";
      break;
  };
  console.log("Rover Position: " + rover.direction);
}
// rotateLeft(rover)
// console.log(rover)

var inst = ['r', 'f', 'f', 'l', 'f', 'r']

function movements(instructions){
  for (var i = 0; i < instructions.length; i++){
    // console.log(i)

    switch (instructions[i]){
      case 'f':
      moveForward(rover);
      break;

      case 'l':
      rotateLeft(rover);
      break;

      case 'r':
      rotateRight(rover);
      break;
    }
  }

}

 movements(inst);