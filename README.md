## Sudoku Versus 
Multiplayer React WS Sudoku Game 

Features:
- randomly generated solvable sudokus in 3 difficulties
- auto solving of said sudokus
- pvp sudoku games , get the best time & beat your friend.
- includes Chat for players & spectators
- Spectators can watch the game live & attack the players
- runs with React 16.9 & webSocket & NodeJS
- chat commands: /newboard (easy | hard | medium), /start, /stop, /solve, /attack(spectators only)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

##Preparation:
run yarn install to get dependencies
make sure you have a .babelrc file containing following command in your root 
{   
  "presets": [
    "@babel/preset-env"   
  ] 
}

In the project directory, you can run:

### `yarn start`
### `yarn run server`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

-Dominik Feger