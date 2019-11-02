import ListNode from "../utilities/list_node";

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

function reverseList(head: ListNode<number>): ListNode<number> {
  let previous: ListNode<number> | null = null;
  let current: ListNode<number> | null = head;
  let next: ListNode<number> | null = null;

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
    let head = new ListNode<number>(1);
    head.next = new ListNode<number>(2);
    head.next.next = new ListNode<number>(3);
    head.next.next.next = new ListNode<number>(4);
    head.next.next.next.next = new ListNode<number>(5);

    const reversedHead: ListNode<number> | null = reverseList(head);

    let current: ListNode<number> | null = reversedHead;

    for (let i = 5; 0 < i; i--) {
      expect(current!.val).toBe(i);

      current = current!.next;
    }
  });
});
