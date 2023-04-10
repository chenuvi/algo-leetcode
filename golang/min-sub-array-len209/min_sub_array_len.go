package min_sub_array_len209

func MinSubArrayLen(target int, nums []int) int {
	left := 0
	length := len(nums) // 数组长度
	sum := 0            // 子数组之和
	// 初始化返回长度为l+1，目的是为了判断“不存在符合条件的子数组，返回0”的情况
	res := length + 1
	for right := 0; right < length; right++ {
		sum += nums[right]
		for sum >= target {
			subLen := right - left + 1
			if subLen < res {
				res = subLen
			}
			sum -= nums[left]
			left++
		}
	}
	if res == length+1 {
		return 0
	}
	return res
}
