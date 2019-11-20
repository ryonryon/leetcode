function canReach(x1: number, y1: number, x2: number, y2: number) {
  return _helper(x1, y1, x2, y2) ? "Yes" : "No";
}

function _helper(_x1: number, _y1: number, _x2: number, _y2: number): boolean {
  if (_x1 === _x2 && _y1 === _y2) return true;
  if (_x2 < _x1 || _y2 < _y1) return false;

  return _helper(_x1 + _y1, _y1, _x2, _y2) || _helper(_x1, _x1 + _y1, _x2, _y2);
}
