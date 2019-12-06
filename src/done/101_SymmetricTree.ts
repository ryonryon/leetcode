import TreeNode from "../utilities/tree_node";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root: TreeNode<number>): boolean {
  function helper(root1: TreeNode<number>, root2: TreeNode<number>): boolean {
    if ((root1 && !root2) || (!root1 && root2)) return false;
    if (!root1 && !root2) return true;
    if (root1.val !== root2.val) return false;

    return (
      helper(root1.left!, root2.right!) && helper(root1.right!, root2.left!)
    );
  }

  return helper(root, root);
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
    root.left.right = new TreeNode(3);
    root.right.right = new TreeNode(3);
    expect(isSymmetric(root)).toBe(false);
  });
});
