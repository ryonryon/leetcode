import ListNode from "../utilities/list_node";

/**
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function isPalindrome(head: ListNode<number>): boolean {
  const serializeList: number[] = serializeLinkedList(head);

  for (let i = 0; i < Math.floor(serializeList.length / 2); i++) {
    if (serializeList[i] !== serializeList[serializeList.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function serializeLinkedList(head: ListNode<number>): number[] {
  const numList: number[] = [];
  let tempLinkedList: ListNode<number> | null = head;

  while (tempLinkedList) {
    numList.push(tempLinkedList!.val);
    tempLinkedList = tempLinkedList.next;
  }
  return numList;
}

describe("is linked list palindrome", () => {
  test("#1", () => {
    const head: ListNode<number> = new ListNode<number>(1);
    head.next = new ListNode<number>(2);

    expect(isPalindrome(head)).toBe(false);
  });
  test("#2", () => {
    const head: ListNode<number> = new ListNode<number>(1);
    head.next = new ListNode<number>(2);
    head.next.next = new ListNode<number>(2);
    head.next.next.next = new ListNode<number>(1);

    expect(isPalindrome(head)).toBe(true);
  });
});
