package remove_element

import "testing"

type charactersState struct {
	desc     string
	nums     []int
	val      int
	expected int
}

func TestSearch(t *testing.T) {
	tests := []charactersState{
		{
			desc:     "[0, 1, 2, 2, 3, 0, 4, 2], val=2",
			nums:     []int{0, 1, 2, 2, 3, 0, 4, 2},
			val:      2,
			expected: 5,
		},
		{
			desc:     "nums = [3,2,2,3], val=3",
			nums:     []int{3, 2, 2, 3},
			val:      3,
			expected: 2,
		},
		{
			desc:     "nums = [3], val = 3",
			nums:     []int{3},
			val:      3,
			expected: 0,
		},
		{
			desc:     "nums = [3,5,7,9], val=6",
			nums:     []int{3, 5, 7, 9},
			val:      6,
			expected: 4,
		},
	}
	for _, tt := range tests {
		t.Run(tt.desc, func(t *testing.T) {
			if got := RemoveElement(tt.nums, tt.val); got != tt.expected {
				t.Errorf("TwoSum(%v) = %d; want %d", tt.nums, tt.val, tt.expected)
			}
		})
	}
}
