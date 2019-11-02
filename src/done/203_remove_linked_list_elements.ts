import ListNode from "../utilities/list_node";

/**
 * https://leetcode.com/problems/remove-linked-list-elements/
 *
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function removeElements(
  head: ListNode<number>,
  val: number
): ListNode<number> | null {
  if (!head) {
    return head;
  }
  let headNode: ListNode<number> = head;
  while (headNode.val === val) {
    if (headNode.next) {
      headNode = headNode.next;
    } else {
      return null;
    }
  }

  let tempNode: ListNode<number> | null = headNode;

  while (tempNode!.next) {
    if (tempNode!.next.val === val) {
      if (tempNode!.next.next) {
        tempNode!.next = tempNode!.next.next;
      } else {
        tempNode!.next = null;
        break;
      }
    } else {
      tempNode = tempNode!.next;
    }
  }

  return headNode;
}

describe("remove element", () => {
  test("#1", () => {
    const head: ListNode<number> = new ListNode<number>(1);
    head.next = new ListNode<number>(2);
    head.next.next = new ListNode<number>(6);
    head.next.next.next = new ListNode<number>(3);
    head.next.next.next.next = new ListNode<number>(4);
    head.next.next.next.next.next = new ListNode<number>(5);
    head.next.next.next.next.next.next = new ListNode<number>(6);

    removeElements(head, 6);

    expect(head.val).toBe(1);
    expect(head.next.val).toBe(2);
    expect(head.next.next.val).toBe(3);
    expect(head.next.next.next.val).toBe(4);
    expect(head.next.next.next.next.val).toBe(5);
    expect(head.next.next.next.next.next).toBeNull();
  });
});
