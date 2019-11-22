/**
 * https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2804/
 * https://leetcode.com/problems/n-queens-ii/submissions/
 *
 * @param {number} n
 * @return {number}
 */

function totalNQueens(n: number): number {
  function backtrackNQueen(row: number = 0): void {
    for (let col = 0; col < n; col++) {
      if (isNotUnderattack(board, row, col)) {
        board[row][col] = "Q";
        if (row === n - 1) {
          count++;
        } else if (row < n - 1) backtrackNQueen(row + 1);
        board[row][col] = ".";
      }
    }
  }
  let count = 0;
  const board: string[][] = Array.from(Array(n), () => new Array(n).fill("."));
  backtrackNQueen();

  return count;
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
  const sampleBoard2 = [
    [".", ".", ".", ".", ".", "Q"],
    [".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "."]
  ];

  test("#_2", () => {
    expect(isNotUnderattack(sampleBoard2, 0, 0)).toBe(false);
    expect(isNotUnderattack(sampleBoard2, 0, 1)).toBe(false);
    expect(isNotUnderattack(sampleBoard2, 0, 2)).toBe(false);
    expect(isNotUnderattack(sampleBoard2, 0, 3)).toBe(false);
    expect(isNotUnderattack(sampleBoard2, 0, 4)).toBe(false);
    expect(isNotUnderattack(sampleBoard2, 0, 5)).toBe(false);

    expect(isNotUnderattack(sampleBoard2, 1, 0)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 1, 1)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 1, 2)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 1, 3)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 1, 4)).toBe(false);
    expect(isNotUnderattack(sampleBoard2, 1, 5)).toBe(false);

    expect(isNotUnderattack(sampleBoard2, 2, 0)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 2, 1)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 2, 2)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 2, 3)).toBe(false);
    expect(isNotUnderattack(sampleBoard2, 2, 4)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 2, 5)).toBe(false);

    expect(isNotUnderattack(sampleBoard2, 3, 0)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 3, 1)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 3, 2)).toBe(false);
    expect(isNotUnderattack(sampleBoard2, 3, 3)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 3, 4)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 3, 5)).toBe(false);

    expect(isNotUnderattack(sampleBoard2, 4, 0)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 4, 1)).toBe(false);
    expect(isNotUnderattack(sampleBoard2, 4, 2)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 4, 3)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 4, 4)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 4, 5)).toBe(false);

    expect(isNotUnderattack(sampleBoard2, 5, 0)).toBe(false);
    expect(isNotUnderattack(sampleBoard2, 5, 1)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 5, 2)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 5, 3)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 5, 4)).toBe(true);
    expect(isNotUnderattack(sampleBoard2, 5, 5)).toBe(false);
  });
});
