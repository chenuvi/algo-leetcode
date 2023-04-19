class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
// way 1: remove element from  origin linkedList
// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   // remove head node
//   while (head !== null && head.val === val) {
//     head = head.next
//   }
//   if (head === null) {
//     return head
//   }
//   let pre = head,
//     cur = head.next
//   // delete node that isn't head
//   while (cur) {
//     if (cur.val === val) {
//       pre.next = cur.next
//     } else {
//       //此处不加类型断言时：编译器会认为pre类型为ListNode, pre.next类型为ListNode | null
//       pre = pre.next as ListNode
//     }
//     cur = cur.next
//   }
//   return head
// }

//  way 2: dummy head
function removeElements(head: ListNode | null, val: number): ListNode | null {
  const data = new ListNode(0, head)
  let pre = data,
    cur = data.next
  while (cur) {
    if (cur.val === val) {
      cur.next = cur.next?.next as ListNode
    } else {
      pre = cur
    }
    cur = cur.next
  }
  return data.next
}
