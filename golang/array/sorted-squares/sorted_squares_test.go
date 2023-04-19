package sorted_squares

import (
	"reflect"
	"testing"
)

func TestSortedSquares(t *testing.T) {
	testCases := []struct {
		name string
		nums []int
		want []int
	}{
		{
			name: "positive and negative numbers",
			nums: []int{-4, -1, 0, 3, 10},
			want: []int{0, 1, 9, 16, 100},
		},
		{
			name: "all negative numbers",
			nums: []int{-7, -3, -1},
			want: []int{1, 9, 49},
		},
		{
			name: "all positive numbers",
			nums: []int{1, 2, 3},
			want: []int{1, 4, 9},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			got := SortedSquares(tc.nums)
			if !reflect.DeepEqual(got, tc.want) {
				t.Errorf("sortedSquares(%v) = %v; want %v", tc.nums, got, tc.want)
			}
		})
	}
}
