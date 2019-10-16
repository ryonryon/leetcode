import TreeNode from "../src/utilities/tree_node";

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function lowestCommonAncestor(
  root: TreeNode,
  p: TreeNode,
  q: TreeNode
): TreeNode {
  while (true) {
    if (p.val! > root.val! && q.val! > root.val!) {
      root = root.left!;
    } else if (p.val! < root.val! && q.val! < root.val!) {
      root = root.right!;
    } else {
      return root;
    }
  }
}

describe("lowest common ancestor", () => {
  test("#1", () => {
    const root = new TreeNode(6);

    root.left = new TreeNode(2);
    root.right = new TreeNode(8);

    root.left.left = new TreeNode(0);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(7);
    root.right.right = new TreeNode(9);

    root.left.right.left = new TreeNode(3);
    root.left.right.right = new TreeNode(5);

    expect(lowestCommonAncestor(root, root.left, root.right)).toBe(root);
  });
});
