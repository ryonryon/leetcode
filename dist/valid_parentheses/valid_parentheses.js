"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isValid = function isValid(s) {
  var tempStr = [];

  for (var i = 0; i < s.length; i++) {
    var ch = s.charAt(i);
    if (ch == "(" || ch == "[" || ch == "{") {
      tempStr.push(ch);
    } else if (ch == ")") {
      if (tempStr.pop() != "(") {
        return false;
      }
    } else if (ch == "]") {
      if (tempStr.pop() != "[") {
        return false;
      }
    } else if (ch == "}") {
      if (tempStr.pop() != "{") {
        return false;
      }
    }
  }

  return tempStr == "" ? true : false;
};

var parens = new Map([[")", "("], ["]", "["], ["}", "{"]]);

exports.default = isValid;