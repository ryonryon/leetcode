/**
 * @param {TreeNode} root
 * @return {number}
 */
import TreeNode from "../utilities/tree_node";

function maxDepth(root: TreeNode<number>): number {
  function _helper(_root: TreeNode<number>, level: number = 1): number {
    if (!_root.left && !_root.right) return level;

    if (!_root.left) return _helper(_root.right!, level + 1);
    else if (!_root.right) return _helper(_root.left!, level + 1);
    else
      return Math.max(
        _helper(_root.left!, level + 1),
        _helper(_root.right!, level + 1)
      );
  }

  return root ? _helper(root) : 0;
}

describe("maxDepth", () => {
  test("#1", () => {
    const root = new TreeNode<number>(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    expect(maxDepth(root)).toBe(3);
  });
});
