import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
const choices = ["rock", "paper", "scissors"]
function randomChoice() {
  return choices[Math.floor(Math.random() * choices.length)]
}

function game() {
  rl.question("Type 1 for Player VS Computer, type 2 for Computer VS Computer: ", function(mode) {
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

function playerVSComputer() {
  let computerChoice = randomChoice()

  rl.question("Choose rock, paper or scissors by entering r, p or s respectively: ", function(choice) {
    let playerChoice = convertInputToChoice(choice)

    if (!choices.includes(playerChoice)) {
      console.log("You did not choose a valid option, try again");
      playerVSComputer()
    } else {
      console.log(`You chose ${playerChoice}`)
      console.log(`Computer chose ${computerChoice}`)

      logic("You", playerChoice, "Computer", computerChoice)
      rl.close()
    }
  });
}

function computerVSComputer() {
  let computer1Choice = randomChoice()
  let computer2Choice = randomChoice()
  console.log(`PC chooses ${computer1Choice}`);
  console.log(`Mac chooses ${computer2Choice}`);
  logic("PC", computer1Choice, "Mac", computer2Choice)
  rl.close()
}

function logic(player1Name, player1Choice, player2Name, player2Choice) {
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

function convertInputToChoice(input) {
  if (input.toLowerCase() == "r") {
    return "rock"
  } else if (input.toLowerCase() == "p") {
    return "paper"
  } else if (input.toLowerCase() == "s") {
    return "scissors"
  }
}

game()
