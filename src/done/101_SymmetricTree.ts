import TreeNode from "./utilities/tree_node";

/**
 * https://leetcode.com/problems/symmetric-tree/
 *
 * @param {TreeNode} root
 * @return {boolean}
 */

function isSymmetric(root: TreeNode<number> | null): boolean {
  function _isSymmetricArray(arr: number[]): boolean {
    if (arr.length === 1) return true;
    if (arr.length % 2 !== 0) return false;
    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] !== arr[arr.length - i - 1]) return false;
    }
    return true;
  }

  function _isValidSteps(_num: number, _step: number) {
    return Math.pow(2, _step) === _num;
  }

  if (root === null) return true;
  const q: [TreeNode<number>, number][] = [[root, 0]];
  let tempNums: number[] = [];
  let tempStep = 0;

  while (0 < q.length) {
    const [node, step] = q.shift()!;
    if (step !== tempStep) {
      if (
        !_isValidSteps(tempNums.length, tempStep) ||
        !_isSymmetricArray(tempNums)
      )
        return false;
      tempNums = [];
      tempStep = step;
    }
    tempNums.push(node.val!);
    if (!node.left && !node.right) continue;
    node.left
      ? q.push([node.left, step + 1])
      : q.push([new TreeNode(0), step + 1]);
    node.right
      ? q.push([node.right, step + 1])
      : q.push([new TreeNode(0), step + 1]);
  }

  return (
    _isValidSteps(tempNums.length, tempStep) && _isSymmetricArray(tempNums)
  );
}

describe("isSymmentric", () => {
  test("#1", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(3);

    expect(isSymmetric(root)).toBe(true);
  });
  test("#2", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = null;
    root.left.right = new TreeNode(3);
    root.right.left = null;
    root.right.right = new TreeNode(3);

    expect(isSymmetric(root)).toBe(false);
  });
  test("#3", () => {
    const root = null;
    expect(isSymmetric(root)).toBe(true);
  });
  test("#4", () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(3);
    root.right = new TreeNode(3);

    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(5);
    root.right.right = new TreeNode(4);

    root.left.left.left = null;
    root.left.left.right = null;
    root.left.right.left = new TreeNode(8);
    root.left.right.right = new TreeNode(9);
    root.right.left.left = null;
    root.right.left.right = null;
    root.right.right.left = new TreeNode(9);
    root.right.right.right = new TreeNode(8);

    expect(isSymmetric(root)).toBe(false);
  });
});
