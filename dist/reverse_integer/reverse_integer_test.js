"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _reverse_integer = require("./reverse_integer");

var _reverse_integer2 = _interopRequireDefault(_reverse_integer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReverseIntegerTest = function ReverseIntegerTest() {
  var ans = (0, _reverse_integer2.default)(-123);
  _assert2.default.equal(-321, ans);

  var ans2 = (0, _reverse_integer2.default)(100);
  _assert2.default.equal(ans2, 1);
};

exports.default = ReverseIntegerTest;