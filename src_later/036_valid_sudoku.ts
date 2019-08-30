/**
 * https://leetcode.com/problems/valid-sudoku/
 *
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board: string[][]): boolean {
  let rowArr: string[] = [];
  let columnArr: string[] = [];
  // let boxArr: string[] = [];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (rowArr.includes(board[i][j])) {
        return false;
      }
      rowArr.push(board[i][j]);

      if (columnArr.includes(board[j][i])) {
        return false;
      }
      columnArr.push(board[j][i]);
    }

    rowArr = [];
    columnArr = [];
  }

  return true;
}

// describe("is valid sudoku", () => {
//   test("#1", () => {
//     const board: string[][] = [
//       ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//       ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//       [".", "9", "8", ".", ".", ".", ".", "6", "."],
//       ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//       ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//       ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//       [".", "6", ".", ".", ".", ".", "2", "8", "."],
//       [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//       [".", ".", ".", ".", "8", ".", ".", "7", "9"]
//     ];

//     expect(isValidSudoku(board)).toBe(true);
//   });
//   test("#2", () => {
//     const board: string[][] = [
//       ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//       ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//       [".", "9", "8", ".", ".", ".", ".", "6", "."],
//       ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//       ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//       ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//       [".", "6", ".", ".", ".", ".", "2", "8", "."],
//       [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//       [".", ".", ".", ".", "8", ".", ".", "7", "9"]
//     ];

//     expect(isValidSudoku(board)).toBe(false);
//   });
// });
