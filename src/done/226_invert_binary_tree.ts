import TreeNode from "../utilities/tree_node";

/**
 * https://leetcode.com/problems/invert-binary-tree/
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function invertTree(root: TreeNode<number> | null): TreeNode<number> | null {
  if (!root) return root;
  if (!root!.left && !root!.right) return root;
  const tempNode: TreeNode<number> | null = root!.left;
  root!.left = root!.right;
  root!.right = tempNode;

  invertTree(root!.left);
  invertTree(root!.right);

  return root;
}

describe("invert tree", () => {
  test("#1", () => {
    const head: TreeNode<number> = new TreeNode<number>(4);
    head.left = new TreeNode<number>(2);
    head.right = new TreeNode<number>(7);
    head.left.left = new TreeNode<number>(1);
    head.left.right = new TreeNode<number>(3);
    head.right.left = new TreeNode<number>(6);
    head.right.right = new TreeNode<number>(9);

    const ansHead: TreeNode<number> = new TreeNode<number>(4);
    ansHead.left = new TreeNode<number>(7);
    ansHead.right = new TreeNode<number>(2);
    ansHead.left.left = new TreeNode<number>(9);
    ansHead.left.right = new TreeNode<number>(6);
    ansHead.right.left = new TreeNode<number>(3);
    ansHead.right.right = new TreeNode<number>(1);

    invertTree(head);

    expect(head.val === ansHead.val).toBe(true);
    expect(head.left.val === ansHead.left.val).toBe(true);
    expect(head.right.val === ansHead.right.val).toBe(true);
    expect(head.left.left.val === ansHead.left.left.val).toBe(true);
    expect(head.left.right.val === ansHead.left.right.val).toBe(true);
    expect(head.right.left.val === ansHead.right.left.val).toBe(true);
    expect(head.right.right.val === ansHead.right.right.val).toBe(true);
  });
});
