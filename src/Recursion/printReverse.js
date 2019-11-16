// https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1439/

function printReverse(str) {
  function _helper(_str, num) {
    if (_str === null || _str.length < num) return;
    _helper(_str, num + 1);
    console.log(_str.charAt(num));
  }

  _helper(str, 0);
}

printReverse("ryo togashi");
