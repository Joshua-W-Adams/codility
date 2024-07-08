import { solution } from "./interview";

describe("solution", () => {
  test.each`
    s             | result
    ${"abcabcbb"} | ${3}
    ${"wkewsd"}   | ${5}
  `("for input $d expect result $result", ({ s, result }) => {
    const actual = solution(s);
    expect(actual).toEqual(result);
  });
});
