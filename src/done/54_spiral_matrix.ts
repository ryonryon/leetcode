/**
 * https://leetcode.com/problems/spiral-matrix/
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */

function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) return [];
  if (matrix.length === 1) return matrix[0];
  if (matrix[0].length === 1) {
    const ans0: number[] = [];
    matrix.forEach(item => ans0.push(item[0]));
    return ans0;
  }
  const seen = Array.from(new Array(matrix.length), () => new Array(matrix[0].length).fill(false));
  const changeWay = changeXY();
  const ans = [];
  let [y, x] = [0, 0];
  let [_y, _x] = changeWay();

  while (1) {
    ans.push(matrix[y][x]);
    seen[y][x] = true;

    if (0 <= _y + y && _y + y < matrix.length && 0 <= _x + x && _x + x < matrix[0].length && !seen[_y + y][_x + x]) {
      [y, x] = [_y + y, _x + x];
      continue;
    }
    [_y, _x] = changeWay();

    if (!seen[_y + y][_x + x]) {
      [y, x] = [_y + y, _x + x];
    } else {
      break;
    }
  }

  return ans;
}

function changeXY() {
  const way = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let thisTime = -1;

  return function() {
    thisTime = thisTime === 3 ? 0 : ++thisTime;
    return way[thisTime];
  };
}

describe("Pascal's Triangle", () => {
  test('#1', () => {
    expect(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  test('#2', () => {
    expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });
  test('#3', () => {
    expect(spiralOrder([[1, 2, 3, 6, 9, 8, 7, 4, 5]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  test('#4', () => {
    expect(spiralOrder([[1], [2], [3], [4], [5], [6], [7], [8], [9]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
