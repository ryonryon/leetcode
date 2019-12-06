import ListNode, { instartLinkedList } from "../utilities/list_node";

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

function reorderList(head: ListNode<number>): void {
  if (!head) return;
  let tempNode = head;
  while (tempNode.next) {
    instartLinkedList(tempNode, getAndDisConnectLastElement(tempNode));
    tempNode = tempNode.next;
    if (!tempNode.next) break;
    tempNode = tempNode.next;
  }
}

function getAndDisConnectLastElement(
  node: ListNode<number> | null
): ListNode<number> | null {
  if (!node) return null;
  let tempNode = node;
  let lastNode = null;
  while (tempNode.next) {
    lastNode = tempNode;
    tempNode = tempNode.next;
  }
  if (lastNode) lastNode.next = null;
  return tempNode;
}

describe("reorderList", () => {
  test("#1", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    reorderList(head);
    expect(head.val).toBe(1);
    expect(head.next.val).toBe(4);
    expect(head.next.next.val).toBe(2);
    expect(head.next.next.next.val).toBe(3);
  });
  test("getAndDisConnectLastElement_#1", () => {
    const head = null;
    const node = getAndDisConnectLastElement(head);
    expect(node).toBeNull;
  });
  test("getAndDisConnectLastElement_#2", () => {
    const head = new ListNode(1);
    const node = getAndDisConnectLastElement(head);
    expect(node!.val).toBe(1);
  });
  test("getAndDisConnectLastElement_#3", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    const node = getAndDisConnectLastElement(head);
    expect(node!.val).toBe(2);
  });
  test("getAndDisConnectLastElement_#4", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    const node = getAndDisConnectLastElement(head);
    expect(node!.val).toBe(3);
    expect(node!.next).toBeNull;
    expect(head!.next).toEqual(new ListNode(2));
    expect(head!.next!.next).toBeNull;
  });
});
