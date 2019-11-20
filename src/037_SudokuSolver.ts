/**
 * https://leetcode.com/problems/sudoku-solver/
 * https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2796/
 *
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

function solveSudoku(board: string[][]): void {
  function backtrackSudoku(row: number = 0) {
    for (let col = 0; col < 9; col++) {
      for (let i = 1; i <= 9; i++) {
        if (isValid(board, row, col, i.toString())) {
          place(board, row, col, i.toString());
        }
      }
    }
  }
  backtrackSudoku();
}

function isValid(
  _board: string[][],
  row: number,
  col: number,
  num: string
): boolean {
  for (let i = 0; i < 9; i++) {
    if (_board[row][i] === num) return false;
    if (_board[i][col] === num) return false;
  }

  const _row = row % 3 === 0 ? row : row % 3 === 1 ? row - 1 : row - 2;
  const _col = col % 3 === 0 ? col : col % 3 === 1 ? col - 1 : col - 2;

  for (let i = _row; i <= _row + 2; i++) {
    for (let j = _col; j <= col + 2; j++) {
      if (_board[i][j] === num) return false;
    }
  }

  return true;
}

function place(
  _board: string[][],
  row: number,
  col: number,
  num: string
): void {
  _board[row][col] = num;
}

function remove(_board: string[][], row: number, col: number): void {
  _board[row][col] = "";
}

describe("solveSudoku", () => {
  const sudokuBoard = [
    ["5", "3", "", "", "7", "", "", "", ""],
    ["6", "", "", "1", "9", "5", "", "", ""],
    ["", "9", "8", "", "", "", "", "6", ""],
    ["8", "", "", "", "6", "", "", "", "3"],
    ["4", "", "", "8", "", "3", "", "", "1"],
    ["7", "", "", "", "2", "", "", "", "6"],
    ["", "6", "", "", "", "", "2", "8", ""],
    ["", "", "", "4", "1", "9", "", "", "5"],
    ["", "", "", "", "8", "", "", "7", "9"]
  ];

  solveSudoku(sudokuBoard);

  expect(sudokuBoard).toEqual([
    ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
    ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
    ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
    ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
    ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
    ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
    ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
    ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
    ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
  ]);
});
