import { computerVSComputer } from "./game_functions/computerVSComputer.js"
import { rl } from "./helpers/readline.js"
import { playerVSComputer } from "./game_functions/playerVSComputer.js"

function game() {
  rl.question("Type 1 for Player VS Computer, type 2 for Computer VS Computer: ", function(mode) {
    if (mode == 1) {
      console.log("You chose Player VS Computer")
      playerVSComputer()
    } else if (mode == 2) {
      console.log("You chose Computer VS Computer")
      computerVSComputer()
    } else {
      console.log("You did not choose a valid option, try again")
      game()
    }
  })
}

game()
