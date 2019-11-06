import TreeNode from "../utilities/tree_node";

/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 *
 * @param {TreeNode} root
 * @return {boolean}
 */

function isValidBST(root: TreeNode<number> | null) {
  if (root === null) return true;
  const q: [[TreeNode<number>, number, number]] = [[root, -Infinity, Infinity]];

  while (0 < q.length) {
    const [node, less, greater] = q.shift()!;
    if (node.val! <= less || greater <= node.val!) return false;
    if (node.left) q.push([node.left, less, node.val!]);
    if (node.right) q.push([node.right, node.val!, greater]);
  }

  return true;
}

describe("isValidBST", () => {
  test("#1", () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(3);
    root.right = new TreeNode(9);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(12);

    expect(isValidBST(root)).toBe(true);
  });
  test("#2", () => {
    const root = null;

    expect(isValidBST(root)).toBe(true);
  });
  test("#3", () => {
    const root = new TreeNode(0);

    expect(isValidBST(root)).toBe(true);
  });
});
