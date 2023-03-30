import { add } from "./add";
// Describe the test suite
describe('add function', () => {
  // Test case 1
  it('should return the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  // Test case 2
  it('should return NaN if one of the arguments is not a number', () => {
    expect(add(1, '2' as any)).toBe("12");
  });
});