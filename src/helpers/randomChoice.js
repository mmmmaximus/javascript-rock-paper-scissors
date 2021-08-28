import { choices } from "./choices.js"

export function randomChoice() {
  return choices[Math.floor(Math.random() * choices.length)]
}
