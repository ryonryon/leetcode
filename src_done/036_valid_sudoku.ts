/**
 * https://leetcode.com/problems/valid-sudoku/
 *
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board: string[][]): boolean {
  const rowSets: Array<Set<string>> = Array.from(new Array(9), _ => new Set());
  const colSets: Array<Set<string>> = Array.from(new Array(9), _ => new Set());
  const boxSets: Array<Array<Set<string>>> = Array.from(new Array(3), _ =>
    Array.from(new Array(3), _ => new Set())
  );

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let value: string = board[row][col];
      if (value === ".") continue;

      const rowSet: Set<string> = rowSets[row];
      const colSet: Set<string> = colSets[col];
      const boxSet: Set<string> =
        boxSets[Math.floor(row / 3)][Math.floor(col / 3)];

      if (rowSet.has(value) || colSet.has(value) || boxSet.has(value))
        return false;

      rowSet.add(value);
      colSet.add(value);
      boxSet.add(value);
    }
  }

  return true;
}

describe("is valid sudoku", () => {
  test("#1", () => {
    const board: string[][] = [
      ["5", "3", "1", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];

    expect(isValidSudoku(board)).toBe(true);
  });
  test("#2", () => {
    const board: string[][] = [
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];

    expect(isValidSudoku(board)).toBe(false);
  });
});
