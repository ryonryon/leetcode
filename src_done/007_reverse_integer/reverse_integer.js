const reverse = function(x) {
  let isMinus = x < 0 ? true : false;
  let ans = 0;
  let _x = Math.abs(x);

  while (true) {
    ans = ans * 10 + (_x % 10);
    _x = Math.floor(_x / 10);

    if (_x / 10 < 1 && _x % 10 == 0) {
      break;
    }
  }

  if (ans > 2147483647) {
    return 0;
  } else {
    return isMinus ? -1 * ans : ans;
  }
};

export default reverse;
