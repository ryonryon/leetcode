/**
 * https://leetcode.com/problems/n-queens/
 *
 * @param {number} n
 * @return {string[][]}
 */

function solveNQueens(n: number): string[][] {
  function backtracking(row: number = 0) {
    for (let col = 0; col < n; col++) {
      if (isNotUnderattackSec(temp, row, col)) {
        temp[row][col] = "Q";
        if (row === n - 1) {
          const formatedTemp: string[] = temp.map(row => row.join(""));
          ans.push(formatedTemp);
        } else if (row < n - 1) {
          backtracking(row + 1);
        }
        temp[row][col] = ".";
      }
    }
  }
  const ans: string[][] = [];
  const temp: string[][] = Array.from(Array(n), () => new Array(n).fill("."));
  backtracking();

  return ans;
}

function isNotUnderattackSec(
  board: string[][],
  row: number,
  col: number
): boolean {
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === "Q") return false;
    if (board[row][i] === "Q") return false;
  }

  const DIAGONAL_MOVES = [[-1, -1], [-1, 1], [1, -1], [1, 1]];

  for (let i = 0; i < DIAGONAL_MOVES.length; i++) {
    const [_row, _col] = DIAGONAL_MOVES[i];
    let [rowPlus, colPlus] = [row + _row, col + _col];
    while (
      0 <= rowPlus &&
      rowPlus < board.length &&
      0 <= colPlus &&
      colPlus < board[0].length
    ) {
      if (board[rowPlus][colPlus] === "Q") return false;
      rowPlus += _row;
      colPlus += _col;
    }
  }

  return true;
}

describe("totalNQueens", () => {
  test("#1", () => {
    expect(solveNQueens(4)).toEqual([
      [".Q..", "...Q", "Q...", "..Q."],
      ["..Q.", "Q...", "...Q", ".Q.."]
    ]);
  });
});
