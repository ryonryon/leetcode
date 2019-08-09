const mergeTwoLists = function(l1, l2) {
  const mergedArr = [];

  if (l1.length < l2.length) {
    for (let i = 0; i < l1.length; i++) {
      if (l1[i] < l2[i]) {
        mergedArr.push(l1[i]);
        mergedArr.push(l2[i]);
      } else {
        mergedArr.push(l2[i]);
        mergedArr.push(l1[i]);
      }
    }
    if (l1.length == l2.length) {
      return mergedArr;
    }
    for (let i = l1.length - 1; i < l2.length; i++) {
      mergedArr.push(l2[i]);
    }
  } else {
    for (let i = 0; i < l2.length; i++) {
      if (l1[i] < l2[i]) {
        mergedArr.push(l1[i]);
        mergedArr.push(l2[i]);
      } else {
        mergedArr.push(l2[i]);
        mergedArr.push(l1[i]);
      }
    }

    if (l1.length == l2.length) {
      return mergedArr;
    }

    for (let i = l2.length - 1; i < l1.length; i++) {
      mergedArr.push(l1[i]);
    }
  }

  return mergedArr;
};

export default mergeTwoLists;
