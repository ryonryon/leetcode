import TreeNode from "../utilities/tree_node";

/**
 * https://leetcode.com/problems/path-sum-ii/
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
function pathSum(root: TreeNode<number>, sum: number): number[][] {
  const ans: number[][] = [];

  function helper(node: TreeNode<number>, arr: number[] = []): void {
    if (
      !node.left &&
      !node.right &&
      sum === arr.reduce((a, b) => a + b, 0) + node.val!
    )
      ans.push([...arr, node.val!]);

    arr.push(node.val!);
    if (node.left) helper(node.left, arr);
    if (node.right) helper(node.right, arr);
    arr.pop();
  }

  if (root) helper(root);

  return ans;
}

describe("pathSum", () => {
  test("#1", () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(4);
    root.right = new TreeNode(8);
    root.left.left = new TreeNode(11);
    root.right.left = new TreeNode(13);
    root.right.right = new TreeNode(4);
    root.left.left.left = new TreeNode(7);
    root.left.left.right = new TreeNode(2);
    root.right.right.left = new TreeNode(5);
    root.right.right.right = new TreeNode(1);

    expect(pathSum(root, 22)).toEqual([[5, 4, 11, 2], [5, 8, 4, 5]]);
  });
});
