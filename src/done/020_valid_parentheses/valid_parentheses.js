const isValid = function(s) {
  let tempStr = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    if (ch == "(" || ch == "[" || ch == "{") {
      tempStr.push(ch);
    } else if (ch == ")") {
      if (tempStr.pop() != "(") {
        return false;
      }
    } else if (ch == "]") {
      if (tempStr.pop() != "[") {
        return false;
      }
    } else if (ch == "}") {
      if (tempStr.pop() != "{") {
        return false;
      }
    }
  }

  return tempStr == "" ? true : false;
};

const parens = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
]);

export default isValid;
