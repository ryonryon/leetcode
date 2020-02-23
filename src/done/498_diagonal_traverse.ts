/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix: number[][]): number[] {
  if (matrix.length === 0) return [];

  let [x, y] = [0, 0];
  const xEndPoint = matrix[0].length - 1;
  const yEndPoint = matrix.length - 1;
  const changeOrder = [];

  while (1) {
    const line = [];
    let [_x, _y] = [x, y];

    while (0 <= _x && _y <= yEndPoint) {
      line.push(matrix[_y][_x]);

      [_x, _y] = [_x - 1, _y + 1];
    }

    changeOrder.push(line);

    if (x < xEndPoint) x++;
    else if (y < yEndPoint) y++;
    else if (x === xEndPoint && y === yEndPoint) break;
  }

  const oneDimArr: number[] = [];
  changeOrder.forEach((item, index) => {
    if (index % 2 === 0) oneDimArr.push(...item.reverse());
    else oneDimArr.push(...item);
  });

  return oneDimArr;
};

describe('diagonal traverse', () => {
  test('#1', () => {
    expect(findDiagonalOrder([[2, 5], [8, 4], [0, -1]])).toEqual([2, 5, 8, 0, 4, -1]);
  });
  test('#2', () => {
    expect(findDiagonalOrder([[2, 5, 8, 4]])).toEqual([2, 5, 8, 4]);
  });
  test('#3', () => {
    expect(findDiagonalOrder([])).toEqual([]);
  });
  test('#4', () => {
    expect(findDiagonalOrder([[2], [5], [8], [4]])).toEqual([2, 5, 8, 4]);
  });
});
