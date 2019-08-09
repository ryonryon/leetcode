"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _marge_two_sorted_list = require("./marge_two_sorted_list");

var _marge_two_sorted_list2 = _interopRequireDefault(_marge_two_sorted_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var margeTwoSortedListTest = function margeTwoSortedListTest() {
  _assert2.default.equal([1, 1, 2, 3, 4, 4], (0, _marge_two_sorted_list2.default)([1, 2, 4], [1, 3, 4]));
};

exports.default = margeTwoSortedListTest;