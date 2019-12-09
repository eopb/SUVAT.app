import { Math } from "core-js";

class MF {
  static maybeBracket = i => (i < 0 ? `(${i})` : i);

  static todp = (i, dp) => Math.round(i * Math.pow(10, dp)) / Math.pow(10, dp);

  static solution = function(l, bef, solution, dp, unit) {
    return `${l} = ${bef}{${this.todp(
      solution,
      dp
    )}}\\mathrm{\\small{${unit}}}`;
  };

  static solutionA = (_solution, dp) =>
    this.solution("a", "", _solution, dp, "ms^{-2}");
  static solutionS = (_solution, dp) =>
    this.solution("s", "", _solution, dp, "m");
  static solutionU = (_solution, bef, dp) =>
    this.solution("u", bef, _solution, dp, "ms^{-1}");
  static solutionV = (_solution, bef, dp) =>
    this.solution("v", bef, _solution, dp, "ms^{-1}");
  static solutionT2 = (_solution, _solution2, dp) =>
    `t = ${this.todp(
      _solution,
      dp
    )}\\mathrm{\\small{s}} \\text{ or } {${this.todp(
      _solution2,
      dp
    )}}\\mathrm{\\small{s}}`;
  static solutionT = (_solution, dp) =>
    this.solution("t", "", _solution, dp, "s");
}

export default MF;
