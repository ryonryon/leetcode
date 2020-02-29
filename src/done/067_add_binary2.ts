/**
 * https://leetcode.com/problems/add-binary/
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

function addBinary2(a: string, b: string): string {
  let ans = '';
  let rest = '0';
  let [i, j] = [a.length - 1, b.length - 1];

  const _a = a.split('');
  const _b = b.split('');

  while (rest === '1' || 0 <= i || 0 <= j) {
    let count = 0;
    if (rest === '1') count++;
    if (0 <= i && _a[i] === '1') count++;
    if (0 <= j && _b[j] === '1') count++;

    rest = count === 3 || count === 2 ? '1' : '0';
    ans = count === 3 || count === 1 ? '1' + ans : '0' + ans;

    i--;
    j--;
  }

  return ans;
}

describe('add binary', () => {
  test('#1', () => {
    expect(addBinary2('11', '1')).toBe('100');
  });
  test('#2', () => {
    expect(addBinary2('1010', '1011')).toBe('10101');
  });
  test('#3', () => {
    expect(addBinary2('110000', '111')).toBe('110111');
  });
});
