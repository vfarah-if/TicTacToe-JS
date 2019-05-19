# TicTacToe-JS
TDD with REACT, Angular, Node, Vue or Vanilla JS. Remember to test drive what ever you do and append any environment enstructions

## Kata description

### Game Setup

- One board – 3 x 3 cells
- Two players - O & X:
  - Player One - X
  - Player Two - O
- Players take turns

### Game Rules

- Player One starts
- A mark can only be placed on an empty cell
- Game ends if …
  - board full, or
  - only one symbol in column, row or diagonal - this
 is a winning condition: owner of the symbol wins

### How to start this

- Create empty react app

   ```powershell
   npx create-react-app react-tic-tac-toe
   ```
- Add Jest and enzyme testing framework (optional)

  ```powershell
  npm i --save-dev enzyme enzyme-adapter-react-16
  ```
- Jest cheatsheet can be found https://github.com/sapegin/jest-cheat-sheet
- Enzyme cheatsheet https://devhints.io/enzyme
- TDD away
