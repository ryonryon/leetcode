"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reverse = function reverse(x) {
  var isMinus = x < 0 ? true : false;
  var ans = 0;
  var _x = Math.abs(x);

  while (true) {
    ans = ans * 10 + _x % 10;
    _x = Math.floor(_x / 10);

    if (_x / 10 < 1 && _x % 10 == 0) {
      break;
    }
  }

  if (ans > 2147483647) {
    return 0;
  } else {
    return isMinus ? -1 * ans : ans;
  }
};

exports.default = reverse;