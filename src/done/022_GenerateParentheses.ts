/**
 * https://leetcode.com/problems/generate-parentheses/
 * https://leetcode.com/explore/learn/card/recursion-ii/503/recursion-to-iteration/2772/
 *
 * @param {number} n
 * @return {string[]}
 */

function generateParenthesis(n: number): string[] {
  function backtracking(col: number = 0) {
    for (let i = 0; i < PARENTHESES_SET.length; i++) {
      temp.push(PARENTHESES_SET[i]);
      if (isWellFormedSoFar(temp, n)) {
        if (col + 1 === n * 2) {
          ans.push(temp.join(""));
        } else {
          backtracking(col + 1);
        }
      }
      temp.pop();
    }
  }

  const ans: string[] = [];
  const temp: string[] = [];
  const PARENTHESES_SET = ["(", ")"];

  backtracking();
  return ans;
}

function isWellFormedSoFar(
  strArr: string[],
  numOfParentheses: number
): boolean {
  if (strArr.length === 0) return true;
  if (strArr[0] === ")") return false;

  const q = [];
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "(") {
      q.push(strArr[i]);
      count++;
    } else {
      if (q[q.length - 1] === "(") q.pop();
      else return false;
    }
    if (numOfParentheses < count) return false;
  }

  return true;
}

describe("generateParenthesis", () => {
  test("#1", () => {
    expect(generateParenthesis(3)).toEqual([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
    ]);
  });
});
