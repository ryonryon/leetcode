"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _roman_to_integer = require("./roman_to_integer");

var _roman_to_integer2 = _interopRequireDefault(_roman_to_integer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var romanToIntTest = function romanToIntTest() {
  _assert2.default.equal((0, _roman_to_integer2.default)("IV"), 4);
};

exports.default = romanToIntTest;