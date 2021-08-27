const readline = require("readline");
const playerVSComputer = require("./playerVSComputer").playerVSComputer
const computerVSComputer = require("./computerVSComputer").computerVSComputer

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function game () {
  rl.question("Type 1 for Player VS Computer, type 2 for Computer VS Computer ", function(mode) {
    if (mode == 1) {
      console.log("You chose Player VS Computer");
      playerVSComputer()
    } else if (mode == 2) {
      console.log("You chose Computer VS Computer");
      computerVSComputer()
    } else {
      console.log("You did not choose a valid option, try again");
      game()
    }
  });
}

game()
