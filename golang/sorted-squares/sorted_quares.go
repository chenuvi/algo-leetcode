package sorted_squares

func SortedSquares(nums []int) []int {
	n := len(nums)
	result := make([]int, n)
	left, right, pos := 0, n-1, n-1
	for left <= right {
		if nums[left]*nums[left] > nums[right]*nums[right] {
			result[pos] = nums[left] * nums[left]
			left++
		} else {
			result[pos] = nums[right] * nums[right]
			right--
		}
		pos--
	}
	return result
}
