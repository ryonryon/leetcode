export default class TreeNode {
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
