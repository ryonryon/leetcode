"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _valid_parentheses = require("./valid_parentheses");

var _valid_parentheses2 = _interopRequireDefault(_valid_parentheses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validParenthesesTest = function validParenthesesTest() {
  _assert2.default.equal(true, (0, _valid_parentheses2.default)("()"));
  _assert2.default.equal(true, (0, _valid_parentheses2.default)("{[]}"));
};

exports.default = validParenthesesTest;