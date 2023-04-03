package remove_element

func RemoveElement(nums []int, val int) int {
	i := 0
	for j := range nums {
		if val != nums[j] {
			nums[i] = nums[j]
			i++
		}
	}
	return i
	//left, right := 0, len(nums)
	//for left < right { // v 即 nums[right]
	//	if nums[left] == val {
	//		nums[left] = nums[right-1]
	//		right--
	//	} else {
	//		left++
	//	}
	//}
	//return left
}
