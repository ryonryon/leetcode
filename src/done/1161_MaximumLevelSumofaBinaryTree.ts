/**
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
 *
 * @param {TreeNode} root
 * @return {number}
 */

import TreeNode from "../utilities/tree_node";

function maxLevelSum(root: TreeNode<number | null>): number {
  let maxSum = 0;
  let maxLevel = 0;
  let tempSum = 0;
  let tempLevel = 1;
  const q: [TreeNode<number | null>, number][] = [[root, 1]];

  while (0 < q.length) {
    const [tempNode, level] = q.shift()!;

    if (tempLevel !== level) {
      if (maxSum < tempSum) {
        maxLevel = tempLevel;
        maxSum = tempSum;
      }
      tempSum = tempNode.val ? tempNode.val : 0;
      tempLevel = level;
    } else {
      tempSum += tempNode.val ? tempNode.val : 0;
    }
    if (tempNode.left) q.push([tempNode.left, level + 1]);
    if (tempNode.right) q.push([tempNode.right, level + 1]);
  }

  return maxLevel;
}

describe("maxLevelSum", () => {
  test("#1", () => {
    const head = new TreeNode(1);
    head.left = new TreeNode(7);
    head.right = new TreeNode(0);
    head.left.left = new TreeNode(7);
    head.left.right = new TreeNode(-8);

    expect(maxLevelSum(head)).toBe(2);
  });
  test("#2", () => {
    const head: TreeNode<number | null> = new TreeNode(989);
    head.left = new TreeNode(null);
    head.right = new TreeNode(10250);
    head.left.left = new TreeNode(98693);
    head.left.right = new TreeNode(-89388);
    head.right.left = new TreeNode(null);
    head.right.right = new TreeNode(null);
    head.left.left.left = new TreeNode(null);
    head.left.left.right = new TreeNode(-32123);

    expect(maxLevelSum(head)).toBe(2);
  });
  test("#3", () => {
    const head: TreeNode<number | null> = new TreeNode(39608);

    head.left = new TreeNode(null);
    head.right = new TreeNode(-34332);

    head.left.left = new TreeNode(84856);
    head.left.right = new TreeNode(62101);
    head.right.left = new TreeNode(98129);
    head.right.right = new TreeNode(null);

    head.left.left.left = new TreeNode(null);
    head.left.left.right = new TreeNode(-26118);
    head.left.right.left = new TreeNode(null);
    head.left.right.right = new TreeNode(57785);
    head.right.left.left = new TreeNode(-75141);
    head.right.left.right = new TreeNode(null);
    head.right.right.left = new TreeNode(null);
    head.right.right.right = new TreeNode(-63491);

    head.left.left.left.left = new TreeNode(-63367);

    expect(maxLevelSum(head)).toBe(3);
  });
});
