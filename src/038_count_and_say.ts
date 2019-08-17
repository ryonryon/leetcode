/**
 * https://leetcode.com/problems/count-and-say/
 *
 * @param {number} n
 * @return {string}
 */

function countAndSay(n: number): string {
  let ansStr: string = "1";
  if (n === 1) {
    return ansStr;
  }

  for (let i = 0; i < n; i++) {
    let tempNum: string | null = null;
    let countNum: number = 0;
    let tempAns: string = "";

    for (let j = 0; j < ansStr.length; j++) {
      if (tempNum === ansStr[i]) {
        countNum++;
      } else {
        if (0 < countNum) {
          tempAns = tempAns + tempNum + countNum.toString();
        }

        tempNum = ansStr[i];
        countNum = 1;
      }

      if (j === ansStr.length - 1) {
        if (0 < countNum) {
          tempAns = tempAns + tempNum + countNum.toString();
        }
        ansStr = tempAns;
      }
    }
  }

  return ansStr;
}

describe("count and say", () => {
  test("#1", () => {
    expect(countAndSay(1)).toBe("1");
  });
  test("#2", () => {
    expect(countAndSay(4)).toBe("1211");
  });
});
