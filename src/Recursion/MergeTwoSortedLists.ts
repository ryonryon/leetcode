import ListNode from "../utilities/list_node";

/**
 * https://leetcode.com/explore/featured/card/recursion-i/253/conclusion/2382/
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function mergeTwoLists(
  l1: ListNode<number> | null,
  l2: ListNode<number> | null
): ListNode<number> | null {
  if (!l1 && l2) return l2;
  else if (l1 && !l2) return l1;
  else if (!l1 && !l2) return null;

  if (l1!.val < l2!.val) {
    l1!.next = mergeTwoLists(l1!.next, l2);

    return l1;
  } else {
    l2!.next = mergeTwoLists(l1, l2!.next);

    return l2;
  }
}

describe("mergeTowLists", () => {
  test("#1", () => {
    const rootL = new ListNode(1);
    rootL.next = new ListNode(2);
    rootL.next.next = new ListNode(4);

    const rootR = new ListNode(1);
    rootR.next = new ListNode(3);
    rootR.next.next = new ListNode(4);

    const rootM = mergeTwoLists(rootL, rootR);
    expect(rootM!.val).toBe(1);
    expect(rootM!.next!.val).toBe(1);
    expect(rootM!.next!.next!.val).toBe(2);
    expect(rootM!.next!.next!.next!.val).toBe(3);
    expect(rootM!.next!.next!.next!.next!.val).toBe(4);
    expect(rootM!.next!.next!.next!.next!.next!.val).toBe(4);
  });

  test("#2", () => {
    const rootL = null;
    const rootR = null;

    const rootM = mergeTwoLists(rootL, rootR);
    expect(rootM).toBe(null);
  });

  test("#3", () => {
    const rootL = null;
    const rootR = new ListNode(1);
    rootR.next = new ListNode(3);
    rootR.next.next = new ListNode(4);

    const rootM = mergeTwoLists(rootL, rootR);
    expect(rootM!.val).toBe(1);
    expect(rootM!.next!.val).toBe(3);
    expect(rootM!.next!.next!.val).toBe(4);
  });
});
