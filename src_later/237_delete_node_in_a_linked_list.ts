import ListNode from "../src/utilities/list_node";

/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

function deleteNode(node: ListNode): void {}

describe("delete node", () => {
  test("#1", () => {
    const head = new ListNode(4);
    head.next = new ListNode(5);
    head.next.next = new ListNode(1);
    head.next.next.next = new ListNode(9);

    deleteNode(head.next);
    expect(head.val).toBe(4);
    expect(head.next.val).toBe(1);
    expect(head.next.next.val).toBe(9);
    expect(head.next.next.next).toBe(null);
  });
});
