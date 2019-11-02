import TreeNode from "../utilities/tree_node";

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

function lowestCommonAncestor(
  root: TreeNode<number>,
  p: TreeNode<number>,
  q: TreeNode<number>
): TreeNode<number> {
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
    const root = new TreeNode<number>(6);

    root.left = new TreeNode<number>(2);
    root.right = new TreeNode<number>(8);

    root.left.left = new TreeNode<number>(0);
    root.left.right = new TreeNode<number>(4);
    root.right.left = new TreeNode<number>(7);
    root.right.right = new TreeNode<number>(9);

    root.left.right.left = new TreeNode<number>(3);
    root.left.right.right = new TreeNode<number>(5);

    expect(lowestCommonAncestor(root, root.left, root.right)).toBe(root);
  });
});
