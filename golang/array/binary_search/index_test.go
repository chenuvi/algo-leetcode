package binary_search

import "testing"

type charactersState struct {
	desc     string
	nums     []int
	target   int
	expected int
}

func TestRemoveElement(t *testing.T) {
	tests := []charactersState{
		{
			desc:     "nums = [-1,0,3,5,9,12], target = 9 ",
			nums:     []int{-1, 0, 3, 5, 9, 12},
			target:   9,
			expected: 4,
		},
		{
			desc:     "nums = [0,1,2,2,3,0,4,2], val = 2",
			nums:     []int{2, 3, 4},
			target:   3,
			expected: 1,
		},
		{
			desc:     "nums = [3], target = 3",
			nums:     []int{3},
			target:   3,
			expected: 0,
		},
		{
			desc:     "nums = [3,5,7, 9], target = 6",
			nums:     []int{3, 5, 7, 9},
			target:   11,
			expected: -1,
		},
	}
	for _, tt := range tests {
		t.Run(tt.desc, func(t *testing.T) {
			if got := Search(tt.nums, tt.target); got != tt.expected {
				t.Errorf("TwoSum(%v) = %v; want %v", tt.nums, tt.target, tt.expected)
			}
		})
	}
}
