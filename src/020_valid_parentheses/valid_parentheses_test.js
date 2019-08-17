import assert from "assert";
import isValid from "./valid_parentheses";

const validParenthesesTest = () => {
  assert.equal(true, isValid("()"));
  assert.equal(true, isValid("{[]}"));
};

export default validParenthesesTest;
