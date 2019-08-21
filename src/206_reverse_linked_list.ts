import ListNode from "./utilities/ListNode";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverseList(head: ListNode): ListNode {
  let previous: ListNode | null = null;
  let current: ListNode | null = head;
  let next: ListNode | null = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous!;
}

describe("reverse linked list", () => {
  test("#1", () => {
    let head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    const reversedHead: ListNode | null = reverseList(head);

    let current: ListNode | null = reversedHead;

    for (let i = 5; 0 < i; i--) {
      expect(current!.val).toBe(i);

      current = current!.next;
    }
  });
});
