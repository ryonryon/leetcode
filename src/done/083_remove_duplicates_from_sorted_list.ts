/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 *
 * @param {ListNode} head
 * @return {ListNode}
 */

import ListNode from "../utilities/list_node";

var deleteDuplicates = function(head: ListNode<number>): ListNode<number> {
  let tempNode = head;

  while (tempNode != null && tempNode.next != null) {
    if (tempNode.val == tempNode.next.val) {
      if (tempNode.next.next == null) {
        tempNode.next = null;
      } else {
        tempNode.next = tempNode.next.next;
      }

      continue;
    }

    tempNode = tempNode.next;
  }

  return head;
};

describe("remove duplicates from sorted list", () => {
  test("#1", () => {
    const nodeHead = new ListNode(1);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    nodeHead.next = node1;
    node1.next = node2;

    const nodeHeadAns = new ListNode(1);
    const nodeAns1 = new ListNode(2);
    nodeHeadAns.next = nodeAns1;

    deleteDuplicates(nodeHead);

    expect(nodeHead.val).toEqual(nodeHeadAns.val);
    expect(nodeHead.next.val).toEqual(nodeHeadAns.next.val);
    expect(nodeHead.next.next).toEqual(nodeHeadAns.next.next);
  });

  test("#2", () => {
    const nodeHead = new ListNode(1);
    const node1 = new ListNode(1);
    const node2 = new ListNode(1);
    nodeHead.next = node1;
    node1.next = node2;

    const nodeHeadAns = new ListNode(1);

    deleteDuplicates(nodeHead);
    expect(nodeHead.val).toEqual(nodeHeadAns.val);
    expect(nodeHead.next).toEqual(nodeHeadAns.next);
  });
});
