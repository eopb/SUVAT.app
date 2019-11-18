class MF {
  static maybeBracket = i => (i < 0 ? `(${i})` : i);

  static solution = function(l, solution, unit) {
    return `${l} = ${solution}\\mathrm{\\small{${unit}}}`;
  };

  static solutionA = _solution => this.solution("a", _solution, "ms^{-2}");
}

export default MF;
