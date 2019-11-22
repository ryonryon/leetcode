/**
 * https://leetcode.com/problems/binary-search-tree-iterator/
 * https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/140/introduction-to-a-bst/1008/
 *
 */
import TreeNode from "./utilities/tree_node";

/**
 * @param {TreeNode} root
 */
class BSTIterator {
  node: TreeNode<number>;

  constructor(root: TreeNode<number>) {
    this.node = root;
  }

  /**
   * @return the next smallest number
   * @return {number}
   */
  next(): number {

  }

  /**
   * @return whether we have a next smallest number
   * @return {boolean}
   */
  hasNext(): boolean {
      return this.node.
  }
}
