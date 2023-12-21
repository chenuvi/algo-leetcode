import { isHappy } from "./index";

describe("isAnagram", () => {
  it(`案例1`, () => {
    expect(isHappy(19)).toBe(true);
  });

  it(`案例2`, () => {
    expect(isHappy(2)).toBe(false);
  });
});
