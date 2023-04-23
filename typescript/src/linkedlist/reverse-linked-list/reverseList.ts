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

export function reverseList(head: ListNode | null): ListNode | null {
    let pre: ListNode | null = null
    let cur: ListNode | null = head
    while (cur) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return  pre
};