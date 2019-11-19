import TreeNode from "../utilities/tree_node";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isValidBST(root: TreeNode<number>): boolean {
  function _helper(
    _root: TreeNode<number> | null,
    _greaterThan: number = -Infinity,
    _lessThan: number = Infinity
  ): boolean {
    if (!_root) return true;

    const left = !_root.left
      ? true
      : _helper(_root.left, _greaterThan, _root.val!);
    const right = !_root.right
      ? true
      : _helper(_root.right, _root.val!, _lessThan);

    return _greaterThan < _root.val! && _root.val! < _lessThan && left && right;
  }
  return _helper(root);
}

describe("isValidBST", () => {
  test("#1", () => {
    const root = new TreeNode<number>(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);

    expect(isValidBST(root)).toBe(true);
  });
  test("#2", () => {
    const root = new TreeNode<number>(10);
    root.left = new TreeNode(5);
    root.right = new TreeNode(15);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(20);

    expect(isValidBST(root)).toBe(false);
  });
});
