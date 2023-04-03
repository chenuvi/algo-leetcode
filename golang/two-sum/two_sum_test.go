package two_sum

import (
	"fmt"
	"reflect"
	"testing"
)

type charactersState struct {
	desc     string
	nums     []int
	target   int
	expected []int
}

func TestTwoSum(t *testing.T) {
	tests := []charactersState{
		{
			desc:     "nums = [2,7,11,15], target = 9 ",
			nums:     []int{2, 7, 11, 15},
			target:   9,
			expected: []int{0, 1},
		},
		{
			desc:     "nums = [3,2,4], target = 6",
			nums:     []int{3, 2, 4},
			target:   6,
			expected: []int{1, 2},
		},
		{
			desc:     "nums = [3,3], target = 6",
			nums:     []int{3, 3},
			target:   6,
			expected: []int{0, 1},
		},
	}
	for _, tt := range tests {
		t.Run(tt.desc, func(t *testing.T) {
			got := TwoSum(tt.nums, tt.target)
			fmt.Printf("got = %v, \n", got)
			if !reflect.DeepEqual(got, tt.expected) {
				t.Errorf("TwoSum(%v) = %v; want %v", tt.nums, tt.target, tt.expected)
			}
		})
	}
}
