package reverse_linked_list

import (
	"reflect"
	"testing"
)

func TestReverseList(t *testing.T) {
	tests := []struct {
		name     string
		input    *ListNode
		expected *ListNode
	}{
		{
			name:     "empty list",
			input:    nil,
			expected: nil,
		},
		{
			name: "single node list",
			input: &ListNode{
				Val:  1,
				Next: nil,
			},
			expected: &ListNode{
				Val:  1,
				Next: nil,
			},
		},
		{
			name: "multiple node list",
			input: &ListNode{
				Val: 1,
				Next: &ListNode{
					Val: 2,
					Next: &ListNode{
						Val: 3,
						Next: &ListNode{
							Val: 4,
							Next: &ListNode{
								Val:  5,
								Next: nil,
							},
						},
					},
				},
			},
			expected: &ListNode{
				Val: 5,
				Next: &ListNode{
					Val: 4,
					Next: &ListNode{
						Val: 3,
						Next: &ListNode{
							Val: 2,
							Next: &ListNode{
								Val:  1,
								Next: nil,
							},
						},
					},
				},
			},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			output := ReverseList(tt.input)
			if !reflect.DeepEqual(output, tt.expected) {
				t.Errorf("ReverseList(%v) = %v, want %v", tt.input, output, tt.expected)
			}
		})
	}
}

//func TestReverseList(t *testing.T) {
//	// Test case 1: empty list
//	var head *ListNode
//	reversed := ReverseList(head)
//	if reversed != nil {
//		t.Errorf("ReverseList(%v) = %v; want %v", head, reversed, nil)
//	}
//
//	// Test case 2: list with one node
//	head = &ListNode{Val: 1, Next: nil}
//	reversed = ReverseList(head)
//	if !reflect.DeepEqual(reversed, head) {
//		t.Errorf("ReverseList(%v) = %v; want %v", head, reversed, head)
//	}
//
//	// Test case 3: list with multiple nodes
//	head = &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 3, Next: nil}}}
//	reversed = ReverseList(head)
//	expected := &ListNode{Val: 3, Next: &ListNode{Val: 2, Next: &ListNode{Val: 1, Next: nil}}}
//	if !reflect.DeepEqual(reversed, expected) {
//		t.Errorf("ReverseList(%v) = %v; want %v", head, reversed, expected)
//	}
//}
