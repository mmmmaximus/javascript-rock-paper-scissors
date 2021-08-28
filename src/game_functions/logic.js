export function logic(player1Name, player1Choice, player2Name, player2Choice) {
  if (player1Choice == player2Choice) {
    console.log("Its a tie!")
  } else if ((player1Choice == "rock" && player2Choice == "scissors") || (player1Choice == "scissors" && player2Choice == "paper") || (player1Choice == "paper" && player2Choice == "rock")) {
    console.log(`${player1Name} won!`)
    console.log(`${player2Name} lost!`)
  } else {
    console.log(`${player2Name} won!`)
    console.log(`${player1Name} lost!`)
  }
}
