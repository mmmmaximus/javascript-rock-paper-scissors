import { computerVSComputer } from "../../game_functions/computerVSComputer.js";

describe("computerVSComputer", () => {
  it("calls console log at least thrice total", () => {
    console.log = jest.fn()
    computerVSComputer()
    expect(console.log.mock.calls.length >= 3).toBe(true)
  })

  it("console logs PC chooses and Mac chooses", () => {
    console.log = jest.fn()
    computerVSComputer()
    expect(console.log.mock.calls[0][0]).toContain("PC chooses ")
    expect(console.log.mock.calls[1][0]).toContain("Mac chooses ")
  })
})
