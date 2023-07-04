import { insertInArray, sum } from "./";

describe("Tests for sum function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 3 + 3 to equl 6", () => {
    const results = sum(3, 3);

    expect(results).toBe(6);
  });
});

describe("Insert element into array", () => {
  test("adds element with index 3", () => {
    const array = [1, 2, 3, 5, 6, 7];

    expect(insertInArray(array, 4, 3)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("adds element with index 8 into array with length 1", () => {
    const array = [1];

    expect(insertInArray(array, 2, 8)).toEqual([1]);
  });
});
