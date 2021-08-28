export function convertInputToChoice(input) {
  if (input.toLowerCase() == "r") {
    return "rock"
  } else if (input.toLowerCase() == "p") {
    return "paper"
  } else if (input.toLowerCase() == "s") {
    return "scissors"
  }
}
