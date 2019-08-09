import assert from "assert";
import mergeTwoLists from "./marge_two_sorted_list";

const margeTwoSortedListTest = () => {
  assert.equal([1, 1, 2, 3, 4, 4], mergeTwoLists([1, 2, 4], [1, 3, 4]));
};

export default margeTwoSortedListTest;
