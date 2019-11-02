export default class ListNode<T> {
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
  val: T;
  next: ListNode<T> | null;
}
