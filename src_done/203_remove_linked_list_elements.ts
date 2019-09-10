import ListNode from "../src/utilities/list_node";

/**
 * https://leetcode.com/problems/remove-linked-list-elements/
 *
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function removeElements(head: ListNode, val: number): ListNode | null {
  if (!head) {
    return head;
  }
  let headNode: ListNode = head;
  while (headNode.val === val) {
    if (headNode.next) {
      headNode = headNode.next;
    } else {
      return null;
    }
  }

  let tempNode: ListNode | null = headNode;

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
    const head: ListNode = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(6);
    head.next.next.next = new ListNode(3);
    head.next.next.next.next = new ListNode(4);
    head.next.next.next.next.next = new ListNode(5);
    head.next.next.next.next.next.next = new ListNode(6);

    removeElements(head, 6);

    expect(head.val).toBe(1);
    expect(head.next.val).toBe(2);
    expect(head.next.next.val).toBe(3);
    expect(head.next.next.next.val).toBe(4);
    expect(head.next.next.next.next.val).toBe(5);
    expect(head.next.next.next.next.next).toBeNull();
  });
});
