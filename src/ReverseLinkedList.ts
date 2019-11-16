/**
 * https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/2378/
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
import ListNode from "./utilities/list_node";

function reverseList(head: ListNode<number>): ListNode<number> {
  let current = head;
  let prev = null;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next!;
  }
  return prev!;
}

describe("reverseList", () => {
  test("#1", () => {
    const root = new ListNode<number>(1);
    root.next = new ListNode(2);
    root.next.next = new ListNode(3);
    root.next.next.next = new ListNode(4);

    const reversedRoot = reverseList(root);
    expect(reversedRoot!.val).toBe(4);
    expect(reversedRoot!.next!.val).toBe(3);
    expect(reversedRoot!.next!.next!.val).toBe(2);
    expect(reversedRoot!.next!.next!.next!.val).toBe(1);
  });
});
