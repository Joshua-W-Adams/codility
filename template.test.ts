import { solution } from "./template";

/**
 * Test case ideas:
 *
 * Correctness:
 * - empty or zero
 * - minimal - just one input, or whatever is the absolute minimal conceiveable input
 * - edge cases - e.g. start, middle and end of array
 *
 * Performance:
 * - worst case - i.e. biggest possible numbers for speed and space constraints
 */

test("some test name", () => {
  const actual = solution(3, [0, 1, 2, 4]);
  expect(actual).toBe(2);
});
