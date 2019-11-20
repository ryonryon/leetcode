/**
 * https://leetcode.com/explore/learn/card/recursion-ii/503/recursion-to-iteration/2894/
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

import TreeNode from "../../utilities/tree_node";

function isSameTreeSecond(p: TreeNode<number>, q: TreeNode<number>): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  const pQueue: TreeNode<number>[] = [p];
  const qQueue: TreeNode<number>[] = [q];

  while (0 < pQueue.length && 0 < qQueue.length) {
    const _p = pQueue.shift();
    const _q = qQueue.shift();

    if (_p!.val !== _q!.val) return false;
    if (_p!.left && _q!.left) {
      pQueue.push(_p!.left);
      qQueue.push(_q!.left);
    } else if (_p!.left || _q!.left) return false;

    if (_p!.right && _q!.right) {
      pQueue.push(_p!.right);
      qQueue.push(_q!.right);
    } else if (_p!.right || _q!.right) return false;
  }

  return true;
}

describe("isSameTreeSecond", () => {
  test("#1", () => {
    const p = new TreeNode<number>(1);
    p.left = new TreeNode(2);
    p.right = new TreeNode(3);

    const q = new TreeNode<number>(1);
    q.left = new TreeNode(2);
    q.right = new TreeNode(3);

    expect(isSameTreeSecond(p, q)).toBe(true);
  });
  test("#2", () => {
    const p = new TreeNode<number>(1);
    p.left = new TreeNode(2);

    const q = new TreeNode<number>(1);
    q.right = new TreeNode(2);

    expect(isSameTreeSecond(p, q)).toBe(false);
  });
  test("#3", () => {
    const p = new TreeNode<number>(1);
    p.left = new TreeNode(2);
    p.right = new TreeNode(1);

    const q = new TreeNode<number>(1);
    q.left = new TreeNode(1);
    q.right = new TreeNode(2);

    expect(isSameTreeSecond(p, q)).toBe(false);
  });
  test("#4", () => {
    const p = new TreeNode<number>(2);
    p.left = null;
    p.right = new TreeNode(4);

    const q = new TreeNode<number>(2);
    q.left = new TreeNode(3);
    q.right = new TreeNode(4);

    expect(isSameTreeSecond(p, q)).toBe(false);
  });
});
