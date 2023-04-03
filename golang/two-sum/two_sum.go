package two_sum

// TwoSum 两数之和
func TwoSum(nums []int, target int) []int {
	var numsMap = make(map[int]int)
	for index, val := range nums {
		r := target - val
		if j, ok := numsMap[r]; ok {
			return []int{j, index}
		}
		numsMap[val] = index
	}
	return nil
}
