/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

function kthGrammar(N: number, K: number): number {
  function _helper(_n: number = 1, grammar: string = "0"): number {
    if (_n === N) return Number(grammar.charAt(K - 1));

    return _helper(_n + 1, getNextGrammar(grammar));
  }

  return _helper();
}

function kthGrammarIte(N: number, K: number): number {
  let grammar = "0";
  for (let i = 1; i <= N; i++) grammar = getNextGrammar(grammar);

  return Number(grammar.charAt(K - 1));
}

function getNextGrammar(pre: string): string {
  let nextGrammar = "";
  for (let i = 0; i < pre.length; i++) {
    const char = pre.charAt(i);
    if (char === "0") nextGrammar = nextGrammar + "01";
    else if (char === "1") nextGrammar = nextGrammar + "10";
  }

  return nextGrammar;
}

describe("kthGrammar", () => {
  test("_1", () => {
    expect(getNextGrammar("0")).toBe("01");
    expect(getNextGrammar("01")).toBe("0110");
    expect(getNextGrammar("0110")).toBe("01101001");
  });
  test("#1", () => {
    expect(kthGrammar(4, 5)).toBe(1);
  });
  test("#2", () => {
    expect(kthGrammarIte(4, 5)).toBe(1);
  });
});
