import { convertInputToChoice } from "../../helpers/convertInputToChoice.js";

it("should return rock when arg is r or R", () => {
  expect(convertInputToChoice("r")).toBe("rock")
  expect(convertInputToChoice("R")).toBe("rock")
})

it("should return rock when arg is p or P", () => {
  expect(convertInputToChoice("p")).toBe("paper")
  expect(convertInputToChoice("P")).toBe("paper")
})

it("should return rock when arg is s or S", () => {
  expect(convertInputToChoice("s")).toBe("scissors")
  expect(convertInputToChoice("S")).toBe("scissors")
})
