package main

import (
	"fmt"
	"golang/array/binary_search"
)

func main() {
	fmt.Printf("二分搜索:[5, 6, 7], 6 的结果是 %v \n", binary_search.Search([]int{5, 6, 7}, 6))
	fmt.Printf("二分搜索:[1,2,3,4], 3 的结果是 %v \n", binary_search.Search([]int{1, 2, 3, 4}, 3))
}
