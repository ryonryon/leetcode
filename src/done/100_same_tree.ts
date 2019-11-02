/**
 * https://leetcode.com/problems/same-tree/
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
import TreeNode from "../utilities/tree_node";

function isSameTree(p: TreeNode<number>, q: TreeNode<number>): boolean {
  let serializedP = serializeTree(p);
  let serializedQ = serializeTree(q);

  if (serializedP.length != serializedQ.length) {
    return false;
  }

  for (let i = 0; i < serializedP.length; i++) {
    if (serializedP[i] != serializedQ[i]) {
      return false;
    }
  }

  return true;
}

function serializeTree(
  tree: TreeNode<number> | null,
  arr: Array<number | null> = []
): Array<number | null> {
  if (!tree) {
    arr.push(null);
    return arr;
  }
  arr.push(tree.val);
  serializeTree(tree.left, arr);
  serializeTree(tree.right, arr);

  return arr;
}

describe("is same tree", () => {
  test("#1", () => {
    const headTree: TreeNode<number> = new TreeNode<number>(1);
    const childTree: TreeNode<number> = new TreeNode<number>(2);
    const childTree2: TreeNode<number> = new TreeNode<number>(3);
    headTree.left = childTree;
    headTree.right = childTree2;

    const headTreeR: TreeNode<number> = new TreeNode<number>(1);
    const childTreeR: TreeNode<number> = new TreeNode<number>(2);
    const childTree2R: TreeNode<number> = new TreeNode<number>(3);
    headTreeR.left = childTreeR;
    headTreeR.right = childTree2R;

    expect(isSameTree(headTree, headTreeR)).toBe(true);
  });

  test("#2", () => {
    const headTree: TreeNode<number> = new TreeNode<number>(1);
    headTree.left = new TreeNode<number>(2);

    const headTreeR: TreeNode<number> = new TreeNode<number>(1);
    headTreeR.left = null;
    headTreeR.right = new TreeNode<number>(2);

    expect(isSameTree(headTree, headTreeR)).toBe(false);
  });
});
