/**
 * https://leetcode.com/problems/count-and-say/
 *
 * @param {number} n
 * @return {string}
 */

function subCountAndSay(str: string): string {
  return str.length.toString() + str[0];
}

function countAndSay(n: number): string {
  let ansStr: string = "1";
  let tempStr: string = "";
  if (n === 1) {
    return ansStr;
  }

  for (let i = 0; i < n - 1; i++) {
    let tempAnsStr = ansStr;
    ansStr = "";
    for (let j = 0; j < tempAnsStr.length; j++) {
      if (tempStr == "") {
        tempStr = tempAnsStr[j];
      } else if (tempStr[0] === tempAnsStr[j]) {
        tempStr += tempAnsStr[j];
      } else {
        ansStr += subCountAndSay(tempStr);
        tempStr = tempAnsStr[j];
      }

      if (j == tempAnsStr.length - 1) {
        ansStr += subCountAndSay(tempStr);
        tempStr = "";
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
    expect(countAndSay(2)).toBe("11");
  });
  test("#3", () => {
    expect(countAndSay(3)).toBe("21");
  });
  test("#4", () => {
    expect(countAndSay(4)).toBe("1211");
  });
  test("#5", () => {
    expect(countAndSay(5)).toBe("111221");
  });
});
