// empty squares
const b = null;

// test boards
const bd1 = [
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
];

const bd2 = [
  [1, b, b, b, b, b, b, b, 3],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, 8, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, 4, b, b],
  [b, b, b, b, b, b, b, b, b],
  [b, 3, b, b, b, b, b, b, b],
  [b, b, b, b, b, b, b, b, 9],
];

const bd3 = [
  [1, 2, 3, 4, 5, 6, 7, 8, b],
  [b, b, b, b, b, b, b, b, 2],
  [b, b, b, b, b, b, b, b, 3],
  [b, b, b, b, b, b, b, b, 4],
  [b, b, b, b, b, b, b, b, 5],
  [b, b, b, b, b, b, b, b, 6],
  [b, b, b, b, b, b, b, b, 7],
  [b, b, b, b, b, b, b, b, 8],
  [b, b, b, b, b, b, b, b, 9],
];

const bd4 = [
  [1, 2, 3, 4, 5, 6, 7, 8, b],
  [b, b, b, b, b, b, b, b, 1],
  [b, b, b, b, b, b, b, b, 2],
  [b, b, b, b, b, b, b, b, 3],
  [b, b, b, b, b, b, b, b, 4],
  [b, b, b, b, b, b, b, b, 5],
  [b, b, b, b, b, b, b, b, 6],
  [b, b, b, b, b, b, b, b, 7],
  [b, b, b, b, b, b, b, b, 8],
];

function solve(board) {
  // if board is already solved, return the board board
  // else we try out the possibilities and keep only the valid ones
  if (solved(board)) {
    return board;
  } else {
    const possibilities = nextBoards(boards);
    const validBoards = keepOnlyValid(possibilities);
    // return helper function to tbd
    return searchForSolution(validBoards);
  }
}

// use a backtracking search to find solution
function searchForSolution(boards) {
  // if board is empty return false
  if (boards.length < 1) {
    return false;
  } else {
    // backtracking searchfor solution
    let first = boards.shift();
    const tryPath = solve(first);
  }
}
