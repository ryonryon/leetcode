const mergeTwoLists = function(l1, l2) {
  if (l1) {
    return l2;
  }

  if (l2) {
    return l1;
  }
  let mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < l1.length && j < l2.length) {
    if (i < j) {
      mergedArr.push(l1[i]);
      i++;
    } else if (i == j) {
      mergedArr.push(l1[i]);
      mergedArr.push(l2[j]);
      i++;
      j++;
    } else {
      mergedArr.push(l2[j]);
      j++;
    }
  }

  if (i == l1.length - 1) {
    for (let k = j; k < l2.length; k++) {
      mergedArr.push(l2[k]);
    }
  } else {
    for (let k = i; k < l1.length; k++) {
      mergedArr.push(l1[k]);
    }
  }

  return mergedArr;
};

export default mergeTwoLists;
