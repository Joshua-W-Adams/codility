import { solution } from "./two-sum";

test("case 1", () => {
  const actual = solution([2, 7, 11, 15], 9);
  const expected = [0, 1];
  expect(actual.sort()).toEqual(expected.sort());
});

test("case 2", () => {
  const actual = solution([3, 2, 4], 6);
  const expected = [1, 2];
  expect(actual.sort()).toEqual(expected.sort());
});

test("case 3", () => {
  const actual = solution([3, 3], 6);
  const expected = [0, 1];
  expect(actual.sort()).toEqual(expected.sort());
});
