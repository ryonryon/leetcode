"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mergeTwoLists = function mergeTwoLists(l1, l2) {
  var mergedArr = [];

  if (l1.length < l2.length) {
    for (var i = 0; i < l1.length; i++) {
      if (l1[i] < l2[i]) {
        mergedArr.push(l1[i]);
        mergedArr.push(l2[i]);
      } else {
        mergedArr.push(l2[i]);
        mergedArr.push(l1[i]);
      }
    }
    if (l1.length == l2.length) {
      return mergedArr;
    }
    for (var _i = l1.length - 1; _i < l2.length; _i++) {
      mergedArr.push(l2[_i]);
    }
  } else {
    for (var _i2 = 0; _i2 < l2.length; _i2++) {
      if (l1[_i2] < l2[_i2]) {
        mergedArr.push(l1[_i2]);
        mergedArr.push(l2[_i2]);
      } else {
        mergedArr.push(l2[_i2]);
        mergedArr.push(l1[_i2]);
      }
    }

    if (l1.length == l2.length) {
      return mergedArr;
    }

    for (var _i3 = l2.length - 1; _i3 < l1.length; _i3++) {
      mergedArr.push(l1[_i3]);
    }
  }

  return mergedArr;
};

exports.default = mergeTwoLists;