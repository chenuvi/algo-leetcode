import { reverseString } from './index';

describe('reverseString', () => {
  test('should reverse empty string array', () => {
    const input: string[] = [];
    reverseString(input);
    expect(input).toEqual([]);
  });

  test('should not alter an array with a single character', () => {
    const input: string[] = ['a'];
    reverseString(input);
    expect(input).toEqual(['a']);
  });

  test('should reverse array with even number of characters', () => {
    const input: string[] = ['h', 'e', 'l', 'l', 'o'];
    reverseString(input);
    expect(input).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  test('should reverse array with odd number of characters', () => {
    const input: string[] = ['f', 'o', 'o', 'b', 'a', 'r'];
    reverseString(input);
    expect(input).toEqual(['r', 'a', 'b', 'o', 'o', 'f']);
  });

  test('should correctly reverse array containing duplicate characters', () => {
    const input: string[] = ['a', 'b', 'b', 'a'];
    reverseString(input);
    expect(input).toEqual(['a', 'b', 'b', 'a']);
  });
});