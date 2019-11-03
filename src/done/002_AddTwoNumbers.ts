/**
 * https://leetcode.com/problems/add-two-numbers/
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

import ListNode from "../utilities/list_node";

function addTwoNumbers(
  l1: ListNode<number>,
  l2: ListNode<number>
): ListNode<number> {
  let templ1: ListNode<number> | null = l1;
  let templ2: ListNode<number> | null = l2;

  let ansHead = new ListNode((templ1.val + templ2.val) % 10);
  let tempNode = ansHead;
  let rise = 10 <= templ1.val + templ2.val ? 1 : 0;

  while (templ1.next || templ2.next || rise === 1) {
    let templ1Val = 0;
    let templ2Val = 0;

    if (templ1.next) {
      templ1Val = templ1.next.val;
      templ1 = templ1.next;
    }

    if (templ2.next) {
      templ2Val = templ2.next.val;
      templ2 = templ2.next;
    }

    tempNode.next = new ListNode((templ1Val + templ2Val + rise) % 10);

    rise = 10 <= templ1Val + templ2Val + rise ? 1 : 0;
    tempNode = tempNode.next;
  }

  return ansHead;
}

describe("addTwoNumbers", () => {
  test("#1", () => {
    const headl1 = new ListNode(2);
    headl1.next = new ListNode(4);
    headl1.next.next = new ListNode(3);
    const headl2 = new ListNode(5);
    headl2.next = new ListNode(6);
    headl2.next.next = new ListNode(4);

    const anshead = addTwoNumbers(headl1, headl2);
    expect(anshead.val).toBe(7);
    expect(anshead.next!.val).toBe(0);
    expect(anshead.next!.next!.val).toBe(8);
    expect(anshead.next!.next!.next).toBeNull;
  });

  test("#2", () => {
    const headl1 = new ListNode(5);
    const headl2 = new ListNode(5);

    const anshead = addTwoNumbers(headl1, headl2);
    expect(anshead.val).toBe(0);
    expect(anshead.next!.val).toBe(1);
    expect(anshead.next!.next).toBeNull;
  });

  test("#3", () => {
    const headl1 = new ListNode(1);
    headl1.next = new ListNode(8);
    const headl2 = new ListNode(0);

    const anshead = addTwoNumbers(headl1, headl2);
    expect(anshead.val).toBe(1);
    expect(anshead.next!.val).toBe(8);
    expect(anshead.next!.next).toBeNull;
  });
});
