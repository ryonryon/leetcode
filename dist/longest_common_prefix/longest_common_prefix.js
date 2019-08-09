"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var longestCommonPrefix = function longestCommonPrefix(strs) {
  if (strs.length == 0) {
    return "";
  } else if (strs.length == 1) {
    return strs[0];
  }

  var prefix = strs[0];

  for (var i = 1; i < strs.length; i++) {
    for (var j = 0; j < prefix.length; j++) {
      if (prefix[j] != strs[i][j]) {
        prefix = prefix.slice(0, j);
        break;
      }
    }
  }

  return prefix;
};

exports.default = longestCommonPrefix;