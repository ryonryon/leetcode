/**
 * https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2804/
 * https://leetcode.com/problems/n-queens-ii/submissions/
 *
 * @param {number} n
 * @return {number}
 */

function totalNQueens(n: number): number {
  function backtrackNQueen(row: number = 0, count: number = 0): number {
    for (let col = 0; col < n; col++) {
      if (isNotUnderattack(board, row, col)) {
        placeQueen(board, row, col);
        if (row + 1 === n) {
          console.log(board);
          count++;
        } else {
          count = backtrackNQueen(row + 1, count);
        }
        removeQueen(board, row, col);
      }
    }
    return count;
  }

  const board: string[][] = Array.from(Array(n), () => new Array(n).fill("."));

  return backtrackNQueen();
}

function isNotUnderattack(
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
    let [_row, _col] = DIAGONAL_MOVES[i];
    while (
      0 <= row + _row &&
      row + _row < board.length &&
      0 <= col + _col &&
      col + _col < board[0].length
    ) {
      const nRow = row + _row;
      const nCol = col + _col;
      if (board[nRow][nCol] === "Q") return false;

      _row += _row;
      _col += _col;
    }
  }

  return true;
}

function placeQueen(board: string[][], row: number, col: number): void {
  board[row][col] = "Q";
}

function removeQueen(board: string[][], row: number, col: number): void {
  board[row][col] = ".";
}

describe("totalNQueens", () => {
  test("#1", () => {
    expect(totalNQueens(4)).toBe(2);
  });
  test("#2", () => {
    expect(totalNQueens(6)).toBe(4);
  });

  const sampleBoard = [
    [".", ".", ".", "."],
    [".", "Q", ".", "."],
    [".", ".", ".", "."],
    [".", ".", ".", "."]
  ];
  test("#_1", () => {
    expect(isNotUnderattack(sampleBoard, 0, 0)).toBe(false);
    expect(isNotUnderattack(sampleBoard, 0, 1)).toBe(false);
    expect(isNotUnderattack(sampleBoard, 0, 2)).toBe(false);
    expect(isNotUnderattack(sampleBoard, 0, 3)).toBe(true);

    expect(isNotUnderattack(sampleBoard, 1, 0)).toBe(false);
    expect(isNotUnderattack(sampleBoard, 1, 1)).toBe(false);
    expect(isNotUnderattack(sampleBoard, 1, 2)).toBe(false);
    expect(isNotUnderattack(sampleBoard, 1, 3)).toBe(false);

    expect(isNotUnderattack(sampleBoard, 2, 0)).toBe(false);
    expect(isNotUnderattack(sampleBoard, 2, 1)).toBe(false);
    expect(isNotUnderattack(sampleBoard, 2, 2)).toBe(false);
    expect(isNotUnderattack(sampleBoard, 2, 3)).toBe(true);

    expect(isNotUnderattack(sampleBoard, 3, 0)).toBe(true);
    expect(isNotUnderattack(sampleBoard, 3, 1)).toBe(false);
    expect(isNotUnderattack(sampleBoard, 3, 2)).toBe(true);
    expect(isNotUnderattack(sampleBoard, 3, 3)).toBe(false);
  });
});
