import assert from "assert";
import mergeTwoLists from "./merge_two_sorted_list";

const mergeTwoSortedListTest = () => {
  assert.equal(
    [1, 1, 2, 3, 4, 4].toString(),
    mergeTwoLists([1, 2, 4], [1, 3, 4]).toString()
  );

  assert.equal([].toString(), mergeTwoLists([], []).toString());
};

export default mergeTwoSortedListTest;
