class MF {
  static maybeBracket = i => (i < 0 ? `(${i})` : i);

  static solution = function(l, bef, solution, unit) {
    return `${l} = ${bef}${solution}\\mathrm{\\small{${unit}}}`;
  };

  static solutionA = _solution => this.solution("a", "", _solution, "ms^{-2}");
  static solutionS = _solution => this.solution("s", "", _solution, "m");
  static solutionU = (_solution, bef) =>
    this.solution("u", bef, _solution, "ms^{-1}");
  static solutionV = (_solution, bef) =>
    this.solution("v", bef, _solution, "ms^{-1}");
}

export default MF;
