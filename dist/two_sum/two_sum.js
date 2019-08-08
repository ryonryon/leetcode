"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var twoSum = exports.twoSum = function twoSum(nums, target) {
  var map = new Map();

  for (var i = 0; i < nums.length; i++) {
    var comp = target - nums[i];
    if (map.has(comp)) {
      return [map.get(comp), i];
    }
    map.set(nums[i], i);
  }
};