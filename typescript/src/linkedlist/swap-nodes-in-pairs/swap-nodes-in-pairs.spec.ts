import { swapPairs, ListNode } from './swap-nodes-in-pairs';

function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) {
        return null;
    }
    const head = new ListNode(arr[0]);
    let currentNode = head;
    for (let i = 1; i < arr.length; i++) {
        currentNode.next = new ListNode(arr[i]);
        currentNode = currentNode.next;
    }
    return head;
}

function toArray(head: ListNode | null): number[] {
    const arr: number[] = [];
    let currentNode = head;
    while (currentNode !== null) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }
    return arr;
}

describe('swapPairs', () => {
    const testCases = [
        { input: [1, 2, 3, 4], output: [2, 1, 4, 3] },
        { input: [1, 2, 3, 4, 5], output: [2, 1, 4, 3, 5] },
        { input: [], output: [] },
        { input: [1], output: [1] },
        { input: [1, 2], output: [2, 1] },
    ];

    testCases.forEach((testCase, index) => {
        test(`Test Case ${index + 1}`, () => {
            const inputList = createLinkedList(testCase.input);
            const outputList = swapPairs(inputList);
            const outputArray = toArray(outputList);
            expect(outputArray).toEqual(testCase.output);
        });
    });
});