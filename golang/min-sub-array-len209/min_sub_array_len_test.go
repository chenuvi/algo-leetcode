package min_sub_array_len209

import "testing"

func TestMinSubArrayLen(t *testing.T) {
	// Test case 1: target is greater than the sum of all elements in nums
	nums1 := []int{1, 2, 3, 4, 5}
	target1 := 100
	expected1 := 0
	if res := MinSubArrayLen(target1, nums1); res != expected1 {
		t.Errorf("MinSubArrayLen(%d, %v) = %d, expected %d", target1, nums1, res, expected1)
	}

	// Test case 2: target is equal to the sum of all elements in nums
	nums2 := []int{1, 2, 3, 4, 5}
	target2 := 15
	expected2 := 5
	if res := MinSubArrayLen(target2, nums2); res != expected2 {
		t.Errorf("MinSubArrayLen(%d, %v) = %d, expected %d", target2, nums2, res, expected2)
	}

	// Test case 3: target is less than the sum of all elements in nums
	nums3 := []int{1, 2, 3, 4, 5}
	target3 := 9
	expected3 := 2
	if res := MinSubArrayLen(target3, nums3); res != expected3 {
		t.Errorf("MinSubArrayLen(%d, %v) = %d, expected %d", target3, nums3, res, expected3)
	}

	// Test case 4: nums contains negative numbers
	nums4 := []int{1, -2, 3, 4, -5}
	target4 := 5
	expected4 := 2
	if res := MinSubArrayLen(target4, nums4); res != expected4 {
		t.Errorf("MinSubArrayLen(%d, %v) = %d, expected %d", target4, nums4, res, expected4)
	}
}
