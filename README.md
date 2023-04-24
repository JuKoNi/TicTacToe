# Tic Tac Toe Game Project

Remember to save and commit your work after each level. This way I can see your progress, give you feedback and see how you solve each changing factor.

Requirements:

- Use React
- Use Chakra UI
- Use Git and Github to save your work in stages

## Level 1:

1. Create a simple HTML page with a 3x3 grid for the game board.

2. Use chakra.ui to style the game board with custom colors and fonts.

3. Add a click event to each grid cell that logs the cell's coordinates to the console when clicked.

## Level 2:

1. Implement the basic game logic for Tic Tac Toe in react with react components.

2. When a cell is clicked on the game board, update the cell with an X or O depending on whose turn it is. (X always goes first).

3. Add logic to check for a winner or a tie after each move.

4. Display a message when the game is over indicating whether X or O won, or if the game ended in a tie. (You can use `alert()` to display the message for now.)

## Level 3:

1. Use React state to keep track of the current player and the state of each cell.

2. Refactor your code to use a `Game` component that renders a `Board` component that renders nine `Cell` components.

3. Use React state to keep track of the current player and the state of each cell.

4. Add CSS classes to style the cells based on their current state, such as highlighting the cell when it is clicked or displaying the X or O in a specific color.

## Level 4:

### Add additional features to your Tic Tac Toe game, such as:

1. Allow players to choose their symbols (X or O). (Remember, X always goes first).

2. Implement a two-player mode where players take turns playing on the same device. (Maybe allow the players to enter their names before the game start and display the name of the current player. Use your imagination!)

3. Use CSS animations to add visual effects to the game, such as highlighting the winning cells or animating the symbols when they are placed on the board.

4. Implement a reset button that allows players to start a new game after the current game is over.

5. Add accessibility features to the game, such as support for keyboard navigation and screen readers. [Example](https://github.com/Orange-OpenSource/react-keyboard-navigation).

Useful links: [Chakra.ui](https://chakra-ui.com/getting-started), [React.dev](https://react.dev/reference/react).