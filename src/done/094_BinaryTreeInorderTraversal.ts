/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 *
 * @param {TreeNode} root
 * @return {number[]}
 */

import TreeNode from "../utilities/tree_node";

function inorderTraversal(root: TreeNode<number>) {
  const arr: number[] = [];

  function _helper(node: TreeNode<number>) {
    if (!node) return;
    if (node.left) _helper(node.left);
    arr.push(node.val!);
    if (node.right) _helper(node.right);
  }

  _helper(root);
  return arr;
}

function inorderTraversalIte(root: TreeNode<number> | null) {
  if (!root) return [];
  const stack: TreeNode<number>[] = [];
  const ans: number[] = [];

  function goToLeft(_node: TreeNode<number>): TreeNode<number> {
    let tempNode = _node;
    while (tempNode.left) {
      stack.push(tempNode);
      tempNode = tempNode.left;
    }

    return tempNode;
  }

  let node: TreeNode<number> | null = goToLeft(root);

  while (node) {
    ans.push(node.val!);
    if (node.right) {
      node = goToLeft(node.right);
    } else if (0 < stack.length) {
      node = stack.pop()!;
    } else {
      node = null;
    }
  }

  return ans;
}

describe("inorderTraversal", () => {
  test("#1", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.left = new TreeNode(3);
    expect(inorderTraversal(root)).toEqual([1, 3, 2]);
  });
  test("#2", () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.left = new TreeNode(3);
    expect(inorderTraversalIte(root)).toEqual([1, 3, 2]);
  });
  test("#2", () => {
    const root = null;
    expect(inorderTraversalIte(root)).toEqual([]);
  });
});
