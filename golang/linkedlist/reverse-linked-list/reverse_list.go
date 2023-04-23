package reverse_linked_list

//  反转列表

// ListNode  Definition for singly-linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

// ReverseList 1. 双指针解法
func ReverseList(head *ListNode) *ListNode {
	var pre *ListNode
	cur := head
	for cur != nil {
		temp := cur.Next
		cur.Next = pre
		pre = cur
		cur = temp
	}
	return pre
}

// ReverseList 2. 递归解法
//func ReverseList(head *ListNode) *ListNode {
//	return help(nil, head)
//}
//
//func help(pre, head *ListNode) *ListNode {
//	if head == nil {
//		return pre
//	}
//	temp := head.Next
//	head.Next = pre
//	return help(head, temp)
//}
