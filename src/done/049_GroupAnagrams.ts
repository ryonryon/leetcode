/**
 * https://leetcode.com/problems/group-anagrams/
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs: string[]): string[][] {
  const ans: string[][] = [];
  const map = new Map<string, string[]>();
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i]
      .split("")
      .sort()
      .join();
    if (map.has(sortedStr)) map.get(sortedStr)!.push(strs[i]);
    else map.set(sortedStr, [strs[i]]);
  }
  for (const anas of map.values()) {
    ans.push([...anas]);
  }
  return ans;
}

describe("groupAnagrams", () => {
  test("#1", () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["eat", "tea", "ate"],
      ["tan", "nat"],
      ["bat"]
    ]);
  });
});
