import { randomChoice } from "../helpers/randomChoice.js"
import { logic } from "./logic.js"
import { rl } from "../helpers/readline.js"

export function computerVSComputer() {
  let computer1Choice = randomChoice()
  let computer2Choice = randomChoice()
  console.log(`PC chooses ${computer1Choice}`)
  console.log(`Mac chooses ${computer2Choice}`)
  logic("PC", computer1Choice, "Mac", computer2Choice)
  rl.close()
}
