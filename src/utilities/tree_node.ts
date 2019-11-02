export default class TreeNode<T> {
  constructor(val: T | null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  val: T | null;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}
