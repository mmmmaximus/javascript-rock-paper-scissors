import { randomChoice } from "../helpers/randomChoice.js"
import { convertInputToChoice } from "../helpers/convertInputToChoice.js"
import { choices } from "../helpers/choices.js"
import { rl } from "../helpers/readline.js"
import { logic } from "./logic.js"

export function playerVSComputer() {
  let computerChoice = randomChoice()

  rl.question("Choose rock, paper or scissors by entering r, p or s respectively: ", function(choice) {
    let playerChoice = convertInputToChoice(choice)

    if (!choices.includes(playerChoice)) {
      console.log("You did not choose a valid option, try again")
      playerVSComputer()
    } else {
      console.log(`You chose ${playerChoice}`)
      console.log(`Computer chose ${computerChoice}`)

      logic("You", playerChoice, "Computer", computerChoice)
      rl.close()
    }
  })
}
