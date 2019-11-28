/**
 * https://leetcode.com/problems/binary-search-tree-iterator/
 * https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/140/introduction-to-a-bst/1008/
 *
 */
import TreeNode from "../utilities/tree_node";

/**
 * @param {TreeNode} root
 */
class BSTIterator {
  currentNode: TreeNode<number> | null = null;
  storedNode: Array<TreeNode<number>> = [];

  constructor(root: TreeNode<number>) {
    if (root) {
      this.goToLeftestSubBranch(root);
    }
  }

  /**
   * @return the next smallest number
   * @return {number}
   */
  next(): number {
    if (!this.hasNext()) return NaN;
    const nextVal = this.currentNode!.val;

    if (this.currentNode!.right) {
      this.goToLeftestSubBranch(this.currentNode!.right);
    } else {
      this.currentNode =
        this.storedNode.length === 0 ? null : this.storedNode.pop()!;
    }

    return nextVal!;
  }

  /**
   * @return whether we have a next smallest number
   * @return {boolean}
   */
  hasNext(): boolean {
    return this.currentNode !== null;
  }

  private goToLeftestSubBranch(node: TreeNode<number>): void {
    if (!node.left) this.currentNode = node;
    while (node.left !== null) {
      this.storedNode.push(node);
      this.currentNode = node.left;
      node = node.left;
    }
  }
}

describe("BSTIterator", () => {
  const root = new TreeNode<number>(7);
  root.left = new TreeNode(3);
  root.right = new TreeNode(15);
  root.right.left = new TreeNode(9);
  root.right.right = new TreeNode(20);

  test("#1", () => {
    const bstIterator = new BSTIterator(root);
    expect(bstIterator.next()).toBe(3);
    expect(bstIterator.next()).toBe(7);
    expect(bstIterator.hasNext()).toBe(true);
    expect(bstIterator.next()).toBe(9);
    expect(bstIterator.hasNext()).toBe(true);
    expect(bstIterator.next()).toBe(15);
    expect(bstIterator.hasNext()).toBe(true);
    expect(bstIterator.next()).toBe(20);
    expect(bstIterator.hasNext()).toBe(false);
  });
});
