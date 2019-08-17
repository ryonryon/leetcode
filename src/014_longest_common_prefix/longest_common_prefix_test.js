import assert from "assert";
import longestCommonPrefix from "./longest_common_prefix";

const longestCommonPrefixTest = () => {
  assert.equal(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
  assert.equal(longestCommonPrefix([]), "");
  assert.equal(longestCommonPrefix(["fawrg"]), "fawrg");
  assert.equal(longestCommonPrefix(["c", "c"]), "c");
};

export default longestCommonPrefixTest;
