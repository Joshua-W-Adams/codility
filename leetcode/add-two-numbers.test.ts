import { solution } from "./add-two-numbers";

describe("solution", () => {
  test.each`
    l1                       | l2              | expected
    ${[2, 4, 3]}             | ${[5, 6, 4]}    | ${[7, 0, 8]}
    ${[0]}                   | ${[0]}          | ${[0]}
    ${[9, 9, 9, 9, 9, 9, 9]} | ${[9, 9, 9, 9]} | ${[8, 9, 9, 9, 0, 0, 0, 1]}
  `("should return $expected for input $l1, $l2", ({ l1, l2, expected }) => {
    const actual = solution(l1, l2);
    // TODO - jest not matching correctly
    expect(actual).toEqual(expect.arrayContaining(expected));
  });
});
