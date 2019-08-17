const longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return "";
  } else if (strs.length == 1) {
    return strs[0];
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < prefix.length; j++) {
      if (prefix[j] != strs[i][j]) {
        prefix = prefix.slice(0, j);
        break;
      }
    }
  }

  return prefix;
};

export default longestCommonPrefix;
