"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _is_palindrome = require("./is_palindrome");

var _is_palindrome2 = _interopRequireDefault(_is_palindrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isPalindromeTest = function isPalindromeTest() {
  (0, _assert2.default)((0, _is_palindrome2.default)(121), true);
};

exports.default = isPalindromeTest;