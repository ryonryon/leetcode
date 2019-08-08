"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isPalindrome = function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  var _x = x;
  var xArr = [];

  while (true) {
    xArr.push(_x % 10);
    _x = Math.floor(_x / 10);

    if (_x / 10 < 1 && _x % 10 == 0) {
      break;
    }
  }

  for (var i = 0; i < xArr.length / 2; i++) {
    if (xArr[i] != xArr[xArr.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

exports.default = isPalindrome;