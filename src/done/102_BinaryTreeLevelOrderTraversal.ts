import TreeNode from "../utilities/tree_node";

/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * https://leetcode.com/explore/learn/card/recursion-ii/503/recursion-to-iteration/2784/
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root: TreeNode<number>): number[][] {
  if (!root) return [];
  const ans: number[][] = [];
  const q: [TreeNode<number>, number][] = [[root, 0]];

  while (0 < q.length) {
    const [node, level] = q.shift()!;
    if (ans.length < level + 1) ans.push([]);
    ans[level].push(node.val!);
    if (node.left) q.push([node.left, level + 1]);
    if (node.right) q.push([node.right, level + 1]);
  }

  return ans;
}

describe("levelOrder", () => {
  test("#1", () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  });
});
