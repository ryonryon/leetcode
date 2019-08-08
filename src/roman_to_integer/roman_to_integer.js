const romanToInt = function(s) {
  const romMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let ansInt = 0;

  for (let i = 0; i < s.length; i++) {
    let tempChar = s.charAt(i);
    let nextChar = s.charAt(i + 1);

    if (romMap[tempChar] < romMap[nextChar]) {
      ansInt = ansInt + romMap[nextChar] - romMap[tempChar];
      i++;
    } else {
      ansInt = ansInt + romMap[tempChar];
    }
  }

  return ansInt;
};

export default romanToInt;
