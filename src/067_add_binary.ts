/**
 * https://leetcode.com/problems/add-binary/
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

function addBinary(a: string, b: string): string {
  let longStr: string[];
  let shortStr: string[];
  if (b.length <= a.length) {
    longStr = a.split("");
    shortStr = b.split("");
  } else {
    longStr = b.split("");
    shortStr = a.split("");
  }

  let moveUp: string = "0";

  for (let i = 0; i < longStr.length; i++) {
    const targetShort: string =
      0 <= shortStr.length - (i + 1)
        ? shortStr[shortStr.length - (i + 1)]
        : "0";
    let targetLong: string = longStr[longStr.length - (i + 1)];

    if (targetShort === "1" && targetLong === "1" && moveUp === "1") {
      longStr[longStr.length - (i + 1)] = "1";

      moveUp = "1";
    } else if (
      (targetShort === "1" && targetLong === "1" && moveUp === "0") ||
      (targetShort === "1" && targetLong === "0" && moveUp === "1") ||
      (targetShort === "0" && targetLong === "1" && moveUp === "1")
    ) {
      longStr[longStr.length - (i + 1)] = "0";

      moveUp = "1";
    } else if (
      (targetShort === "1" && targetLong === "0" && moveUp === "0") ||
      (targetShort === "0" && targetLong === "0" && moveUp === "1") ||
      (targetShort === "0" && targetLong === "1" && moveUp === "0")
    ) {
      longStr[longStr.length - (i + 1)] = "1";
      moveUp = "0";
    } else {
      moveUp = "0";
    }

    if (longStr.length - 1 === i && moveUp === "1") {
      longStr.unshift("1");
      moveUp = "0";
    }
  }

  return longStr.join("");
}

describe("add binary", () => {
  test("#1", () => {
    expect(addBinary("11", "1")).toBe("100");
  });
  test("#2", () => {
    expect(addBinary("1010", "1011")).toBe("10101");
  });
  test("#3", () => {
    expect(addBinary("110000", "111")).toBe("110111");
  });
});
