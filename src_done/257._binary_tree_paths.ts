import TreeNode from "../src/utilities/tree_node";

/**
 * https://leetcode.com/problems/binary-tree-paths/submissions/
 *
 * @param {TreeNode} root
 * @return {string[]}
 */

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) {
    return [];
  }
  const soFarArr: string[] = [];
  binaryTreePathsHelper(root, soFarArr, "");
  return soFarArr;
}

function binaryTreePathsHelper(
  root: TreeNode,
  soFarArr: string[],
  soFar: string
): void {
  if (!root.right && !root.left) {
    soFarArr.push(soFar === "" ? `${root.val}` : `${soFar}->${root.val}`);
  }

  if (root.left) {
    binaryTreePathsHelper(
      root.left,
      soFarArr,
      soFar === "" ? `${root.val}` : `${soFar}->${root.val}`
    );
  }
  if (root.right) {
    binaryTreePathsHelper(
      root.right,
      soFarArr,
      soFar === "" ? `${root.val}` : `${soFar}->${root.val}`
    );
  }
}

describe("binary tree paths", () => {
  test("#1", () => {
    const headTree: TreeNode = new TreeNode(1);
    headTree.left = new TreeNode(2);
    headTree.left.left = new TreeNode(5);
    headTree.right = new TreeNode(3);

    expect(binaryTreePaths(headTree)).toEqual(["1->2->5", "1->3"]);
  });
  test("#2", () => {
    expect(binaryTreePaths(null)).toEqual([]);
  });
});
