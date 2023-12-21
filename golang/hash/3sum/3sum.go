package _sum

import (
	"sort"
)

func ThreeSum(nums []int) [][]int {
	sort.Ints(nums)
	result := [][]int{}
	for i := range nums {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		l, r := i+1, len(nums)-1
		for l < r {
			sum := nums[i] + nums[l] + nums[r]
			if sum > 0 {
				r--
			} else if sum < 0 {
				l++
			} else {
				result = append(result, []int{nums[i], nums[l], nums[r]})
				l, r = next(nums, l, r)
			}
		}
	}
	return result
}

func next(nums []int, l int, r int) (int, int) {
	for l < r && nums[l] == nums[l+1] {
		l++
	}
	for l < r && nums[r] == nums[r-1] {
		r--
	}
	return l + 1, r - 1
}
