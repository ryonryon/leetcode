export default class ListNode {
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
  val: number;
  next: ListNode | null;
}
