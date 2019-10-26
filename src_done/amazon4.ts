function removeObstacle(
  numRows: number,
  numColumns: number,
  lot: number[][]
): number {
  return removeObstacleHelper(numRows, numColumns, lot);
}

function removeObstacleHelper(
  numRows: number,
  numColumns: number,
  lot: number[][],
  positionRow: number = 0,
  positionCol: number = 0,
  soFar: number = 0
): number {
  if (lot[positionRow][positionCol] === 9) {
    return soFar;
  }
  if (lot[positionRow][positionCol] === 0) {
    return -1;
  }

  set.add(`${positionRow}*${positionCol}`);

  if (
    positionRow < numRows - 1 &&
    !set.has(`${positionRow + 1}*${positionCol}`)
  ) {
    const right = removeObstacleHelper(
      numRows,
      numColumns,
      lot,
      positionRow + 1,
      positionCol,
      soFar + 1
    );
    if (right !== -1) {
      return right;
    }
  }
  if (0 < positionRow && !set.has(`${positionRow - 1}*${positionCol}`)) {
    const left = removeObstacleHelper(
      numRows,
      numColumns,
      lot,
      positionRow - 1,
      positionCol,
      soFar + 1
    );
    if (left !== -1) {
      return left;
    }
  }
  if (
    positionCol < numColumns - 1 &&
    !set.has(`${positionRow}*${positionCol + 1}`)
  ) {
    const bottom = removeObstacleHelper(
      numRows,
      numColumns,
      lot,
      positionRow,
      positionCol + 1,
      soFar + 1
    );
    if (bottom !== -1) {
      return bottom;
    }
  }
  if (0 < positionCol && !set.has(`${positionRow}*${positionCol - 1}`)) {
    const top = removeObstacleHelper(
      numRows,
      numColumns,
      lot,
      positionRow,
      positionCol - 1,
      soFar + 1
    );
    if (top !== -1) {
      return top;
    }
  }

  return -1;
}

const set = new Set<string>();

describe("amazon4", () => {
  test("#1", () => {
    expect(removeObstacle(3, 3, [[1, 0, 0], [1, 0, 0], [1, 9, 1]])).toBe(3);
  });
});
