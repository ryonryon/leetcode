import assert from "assert";
import reverse from "./reverse_integer";

const ReverseIntegerTest = () => {
  const ans = reverse(-123);
  assert.equal(-321, ans);

  const ans2 = reverse(100);
  assert.equal(ans2, 1);
};

export default ReverseIntegerTest;
