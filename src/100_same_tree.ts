/**
 * https://leetcode.com/problems/same-tree/
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
import TreeNode from "./utilities/tree_node";

function isSameTree(p: TreeNode, q: TreeNode): boolean {
  while (true) {}
  return true;
}

function serializeTree(tree: TreeNode | null, arr: number[]) {
  if (!tree) {
    return;
  }

  arr.push(tree.val);
  serializeTree(tree.left, arr);
  serializeTree(tree.right, arr);
}

describe("is same tree", () => {
  test("#1", () => {
    const headTree: TreeNode = new TreeNode(1);
    const childTree: TreeNode = new TreeNode(2);
    const childTree2: TreeNode = new TreeNode(3);
    headTree.left = childTree;
    headTree.right = childTree2;

    const headTreeR: TreeNode = new TreeNode(1);
    const childTreeR: TreeNode = new TreeNode(2);
    const childTree2R: TreeNode = new TreeNode(3);
    headTreeR.left = childTreeR;
    headTreeR.right = childTree2R;

    expect(isSameTree(headTree, headTreeR)).toBe(true);
  });
});
