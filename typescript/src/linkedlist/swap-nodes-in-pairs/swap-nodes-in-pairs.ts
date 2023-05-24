/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function swapPairs(head: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0, head)
    let curNode: ListNode | null = dummyHead
    while (curNode && curNode.next && curNode.next.next) {
        let firstNode: ListNode = curNode.next,
            secNode: ListNode = curNode.next.next,
            thirdNode: ListNode | null = curNode.next.next.next
        curNode.next = secNode
        secNode.next = firstNode
        firstNode.next = thirdNode
        curNode = curNode.next.next
    }
    return dummyHead.next
};