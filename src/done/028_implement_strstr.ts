// https://leetcode.com/problems/implement-strstr/

function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) == needle) {
      return i;
    }
  }
  return needle == "" ? 0 : -1;
}

describe("implement strstr", () => {
  test("#1", () => {
    expect(strStr("hello", "ll")).toBe(2);
  });
});
