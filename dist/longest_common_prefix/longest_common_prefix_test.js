"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _longest_common_prefix = require("./longest_common_prefix");

var _longest_common_prefix2 = _interopRequireDefault(_longest_common_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var longestCommonPrefixTest = function longestCommonPrefixTest() {
  _assert2.default.equal((0, _longest_common_prefix2.default)(["flower", "flow", "flight"]), "fl");
  _assert2.default.equal((0, _longest_common_prefix2.default)([]), "");
  _assert2.default.equal((0, _longest_common_prefix2.default)(["fawrg"]), "fawrg");
  _assert2.default.equal((0, _longest_common_prefix2.default)(["c", "c"]), "c");
};

exports.default = longestCommonPrefixTest;