export default class TreeNode {
  constructor(val: number | null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  val: number | null;
  left: TreeNode | null;
  right: TreeNode | null;
}
