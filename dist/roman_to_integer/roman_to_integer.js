"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var romanToInt = function romanToInt(s) {
  var romMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  var ansInt = 0;

  for (var i = 0; i < s.length; i++) {
    var tempChar = s.charAt(i);
    var nextChar = s.charAt(i + 1);

    if (romMap[tempChar] < romMap[nextChar]) {
      ansInt = ansInt + romMap[nextChar] - romMap[tempChar];
      i++;
    } else {
      ansInt = ansInt + romMap[tempChar];
    }
  }

  return ansInt;
};

exports.default = romanToInt;