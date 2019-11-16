/**
 * https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1681/
 *
 * @param {ListNode} head
 * @return {ListNode}
 */

import ListNode from "../utilities/list_node";

function swapPairs(head: ListNode<number>): ListNode<number> | null {
  if (head === null) return null;
  if (head !== null && head.next === null) return head;
  const tempNode = head;
  const tempNode2 = head.next;
  const tempNode3 = head.next!.next;
  head = tempNode2!;
  head.next = tempNode;
  head.next.next = swapPairs(tempNode3!);

  return head;
}

describe("swapPairs", () => {
  test("#1", () => {
    const root = new ListNode<number>(1);
    root.next = new ListNode(2);
    root.next.next = new ListNode(3);
    root.next.next.next = new ListNode(4);

    const rootAns = swapPairs(root);

    expect(rootAns!.val).toBe(2);
    expect(rootAns!.next!.val).toBe(1);
    expect(rootAns!.next!.next!.val).toBe(4);
    expect(rootAns!.next!.next!.next!.val).toBe(3);
  });
});
