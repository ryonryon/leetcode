var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  let _x = x;
  let xArr = [];

  while (true) {
    xArr.push(_x % 10);
    _x = Math.floor(_x / 10);

    if (_x / 10 < 1 && _x % 10 == 0) {
      break;
    }
  }

  for (let i = 0; i < xArr.length / 2; i++) {
    if (xArr[i] != xArr[xArr.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

export default isPalindrome;
