import { logic } from "../../game_functions/logic.js";

describe("tie", () => {
  it("logs Its a tie! when both players choose rock", () => {
    console.log = jest.fn()
    logic("player1Name", "rock", "player2Name", "rock")
    expect(console.log.mock.calls[0][0]).toBe("Its a tie!")
  })

  it("logs Its a tie! when both players choose paper", () => {
    console.log = jest.fn()
    logic("player1Name", "paper", "player2Name", "paper")
    expect(console.log.mock.calls[0][0]).toBe("Its a tie!")
  })

  it("logs Its a tie! when both players choose scissors", () => {
    console.log = jest.fn()
    logic("player1Name", "scissors", "player2Name", "scissors")
    expect(console.log.mock.calls[0][0]).toBe("Its a tie!")
  })
})

describe("player 1 wins", () => {
  it("logs player1 name won! and player2 name lost! when player1 chooses rock and player2 chooses scissors", () => {
    console.log = jest.fn()
    logic("player1Name", "rock", "player2Name", "scissors")
    expect(console.log.mock.calls[0][0]).toBe("player1Name won!")
    expect(console.log.mock.calls[1][0]).toBe("player2Name lost!")
  })

  it("logs player1 name won! and player2 name lost! when player1 chooses paper and player2 chooses rock", () => {
    console.log = jest.fn()
    logic("player1Name", "paper", "player2Name", "rock")
    expect(console.log.mock.calls[0][0]).toBe("player1Name won!")
    expect(console.log.mock.calls[1][0]).toBe("player2Name lost!")
  })

  it("logs player1 name won! and player2 name lost! when player1 chooses scissors and player2 chooses paper", () => {
    console.log = jest.fn()
    logic("player1Name", "scissors", "player2Name", "paper")
    expect(console.log.mock.calls[0][0]).toBe("player1Name won!")
    expect(console.log.mock.calls[1][0]).toBe("player2Name lost!")
  })
})

describe("player 2 wins", () => {
  it("logs player1 name lost! and player2 won! when player1 chooses scissors and player2 chooses rock", () => {
    console.log = jest.fn()
    logic("player1Name", "scissors", "player2Name", "rock")
    expect(console.log.mock.calls[0][0]).toBe("player2Name won!")
    expect(console.log.mock.calls[1][0]).toBe("player1Name lost!")
  })

  it("logs player1 name lost! and player2 won! when player1 chooses rock and player2 chooses paper", () => {
    console.log = jest.fn()
    logic("player1Name", "rock", "player2Name", "paper")
    expect(console.log.mock.calls[0][0]).toBe("player2Name won!")
    expect(console.log.mock.calls[1][0]).toBe("player1Name lost!")
  })

  it("logs player1 name lost! and player2 won! when player1 chooses paper and player2 chooses scissors", () => {
    console.log = jest.fn()
    logic("player1Name", "paper", "player2Name", "scissors")
    expect(console.log.mock.calls[0][0]).toBe("player2Name won!")
    expect(console.log.mock.calls[1][0]).toBe("player1Name lost!")
  })
})
