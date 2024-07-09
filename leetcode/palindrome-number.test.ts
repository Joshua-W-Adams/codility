import { solution } from "./palindrome-number";

describe("palindrome solution", () => {
  test.each`
    x      | result
    ${121} | ${true}
  `("for input $xx expect result $result", ({ x, result }) => {
    const actual = solution(x);
    expect(actual).toEqual(result);
  });
});
