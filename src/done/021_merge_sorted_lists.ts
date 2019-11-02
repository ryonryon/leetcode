/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

import ListNode from "../utilities/list_node";

function mergeTwoLists(
  l1: ListNode<number> | null,
  l2: ListNode<number> | null
): ListNode<number> | null {
  if (l1 == null && l2 == null) {
    return null;
  }

  let ansNode: ListNode<number> | null = null;
  let tempAns: ListNode<number> | null = null;
  let tempNode1: ListNode<number> | null = null;
  let tempNode2: ListNode<number> | null = null;

  if (l1 != null) {
    tempNode1 = l1;
  }

  if (l2 != null) {
    tempNode2 = l2;
  }

  if (tempNode1 && tempNode2) {
    if (tempNode1.val <= tempNode2.val) {
      ansNode = tempNode1;
      tempNode1 = tempNode1.next;
    } else {
      ansNode = tempNode2;
      tempNode2 = tempNode2.next;
    }
  } else if (tempNode1 && !tempNode2) {
    ansNode = tempNode1;
    tempNode1 = tempNode1.next;
  } else if (!tempNode1 && tempNode2) {
    ansNode = tempNode2;
    tempNode2 = tempNode2.next;
  }

  tempAns = ansNode;

  while (tempNode1 || tempNode2) {
    if (tempNode1 && tempNode2) {
      if (tempNode1.val <= tempNode2.val) {
        tempAns!.next = tempNode1;
        tempNode1 = tempNode1.next;
      } else {
        tempAns!.next = tempNode2;
        tempNode2 = tempNode2.next;
      }
    } else if (tempNode1 && !tempNode2) {
      tempAns!.next = tempNode1;
      tempNode1 = tempNode1.next;
    } else if (!tempNode1 && tempNode2) {
      tempAns!.next = tempNode2;
      tempNode2 = tempNode2.next;
    }
    tempAns = tempAns!.next;
  }

  return ansNode;
}

describe("merge sorted lists", () => {
  test("#1", () => {
    const headNode = new ListNode(1);
    const node1 = new ListNode(2);
    const node2 = new ListNode(4);
    headNode.next = node1;
    node1.next = node2;

    const _headNode = new ListNode(1);
    const _node1 = new ListNode(3);
    const _node2 = new ListNode(4);
    _headNode.next = _node1;
    _node1.next = _node2;

    const ansHeadNode = new ListNode(1);
    const ansNode1 = new ListNode(1);
    const ansNode2 = new ListNode(2);
    const ansNode3 = new ListNode(3);
    const ansNode4 = new ListNode(4);
    const ansNode5 = new ListNode(4);
    ansHeadNode.next = ansNode1;
    ansNode1.next = ansNode2;
    ansNode2.next = ansNode3;
    ansNode3.next = ansNode4;
    ansNode4.next = ansNode5;

    const newHeadNode = mergeTwoLists(headNode, _headNode);

    let tempAnsNode: ListNode<number> | null = ansHeadNode;
    let tempNode: ListNode<number> | null = newHeadNode;

    // [1, 1, 2, 3, 4]
    while (true) {
      expect(tempAnsNode.val).toBe(tempNode!.val);

      if (tempAnsNode.next == null || tempNode!.next == null) {
        break;
      }

      tempAnsNode = tempAnsNode.next;
      tempNode = tempNode!.next;
    }
  });

  test("#2", () => {
    const node1: ListNode<number> | null = null;
    const node2: ListNode<number> | null = null;

    expect(mergeTwoLists(node1, node2)).toBeNull();
  });

  test("#3", () => {
    const node1: ListNode<number> | null = new ListNode<number>(2);
    const node2: ListNode<number> | null = new ListNode<number>(1);

    const ansHeadNode: ListNode<number> | null = new ListNode<number>(1);
    const ansNode: ListNode<number> | null = new ListNode<number>(2);
    ansHeadNode.next = ansNode;

    const resultNode: ListNode<number> | null = mergeTwoLists(node1, node2);

    expect(resultNode!.val).toEqual(ansHeadNode!.val);
    expect(resultNode!.next!.val).toEqual(ansHeadNode!.next!.val);
  });

  test("#4", () => {
    const node1: ListNode<number> | null = null;
    const node2: ListNode<number> | null = new ListNode<number>(0);

    const ansHeadNode: ListNode<number> | null = new ListNode<number>(0);

    const resultNode: ListNode<number> | null = mergeTwoLists(node1, node2);

    expect(resultNode!.val).toEqual(ansHeadNode!.val);
    expect(resultNode!.next).toEqual(ansHeadNode!.next);
  });
});
