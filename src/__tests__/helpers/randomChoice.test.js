import { randomChoice } from "../../helpers/randomChoice.js";
import { choices } from "../../helpers/choices.js"

it("should return a string from choices array", () => {
  expect(choices.includes(randomChoice())).toBe(true)
})
