export default class ListNode<T> {
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
  val: T;
  next: ListNode<T> | null;
}

export function instartLinkedList(
  node: ListNode<number> | null,
  attemptNode: ListNode<number> | null
): void {
  if (!node || !attemptNode) return;
  if (!node.next) {
    node.next = attemptNode;
  } else {
    const tempNode = node.next;
    node.next = attemptNode;
    attemptNode.next = tempNode;
  }
}

describe("instartLinkedList", () => {
  test("#1", () => {
    const head = null;
    const att = new ListNode(1);
    instartLinkedList(head, att);
    expect(head).toBeNull;
    expect(att.val).toBe(1);
    expect(att.next).toBeNull;
  });
  test("#2", () => {
    const head = new ListNode(1);
    const att = null;
    instartLinkedList(head, att);
    expect(head.val).toBe(1);
    expect(head.next).toBeNull;
    expect(att).toBeNull;
  });
  test("#2", () => {
    const head = new ListNode(1);
    const att = new ListNode(2);
    instartLinkedList(head, att);
    expect(head.val).toBe(1);
    expect(head.next!.val).toBe(2);
    expect(head.next!.next).toBeNull;
  });
  test("#3", () => {
    const head = new ListNode(1);
    head.next = new ListNode(3);
    const att = new ListNode(2);
    instartLinkedList(head, att);
    expect(head.val).toBe(1);
    expect(head.next.val).toBe(2);
    expect(head.next!.next!.val).toBe(3);
    expect(head.next!.next!.next).toBeNull;
  });
});
