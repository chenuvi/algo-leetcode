import {reverseList} from './reverseList';

const testCases = [
    {
        input: null,
        output: null,
    },
    {
        input: {val: 1, next: null},
        output: {val: 1, next: null},
    },
    {
        input: {val: 1, next: {val: 2, next: null}},
        output: {val: 2, next: {val: 1, next: null}},
    },
    {
        input: {val: 1, next: {val: 2, next: {val: 3, next: null}}},
        output: {val: 3, next: {val: 2, next: {val: 1, next: null}}},
    },
]

testCases.forEach(({input, output}) => {
    const result = reverseList(input);
    expect(result).toEqual(output);
});

describe('reverseList', () => {
    it('should return null for empty list', () => {
        expect(reverseList(null)).toBeNull();
    });

    it('should reverse a list with multiple nodes', () => {
        const head = {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: null,
                },
            },
        };
        const reversed = reverseList(head);
        expect(reversed.val).toBe(3);
        expect(reversed.next.val).toBe(2);
        expect(reversed.next.next.val).toBe(1);
        expect(reversed.next.next.next).toBeNull();
    });

    it('should return the same node for a list with only one node', () => {
        const head = {
            val: 1,
            next: null,
        };
        const reversed = reverseList(head);
        expect(reversed.val).toBe(1);
        expect(reversed.next).toBeNull();
    });
});