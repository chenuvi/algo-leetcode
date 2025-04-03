use algo_leetcode::Solution;
use std::collections::HashSet;

#[test]
fn test_example1_return_top_k_frequent_elements() {
    let nums = vec![1, 1, 1, 2, 2, 3];
    let k = 2;
    let result: HashSet<i32> = Solution::top_k_frequent(nums, k).into_iter().collect();
    let expected: HashSet<i32> = vec![1, 2].into_iter().collect();
    assert_eq!(result, expected);
}

#[test]
fn test_example2_single_element_array() {
    let nums = vec![1];
    let k = 1;
    assert_eq!(Solution::top_k_frequent(nums, k), vec![1]);
}

#[test]
fn test_with_negative_numbers() {
    let nums = vec![-1, -1, 2, 2, 2, 3];
    let k = 2;
    let result: HashSet<i32> = Solution::top_k_frequent(nums, k).into_iter().collect();
    let expected: HashSet<i32> = vec![2, -1].into_iter().collect();
    assert_eq!(result, expected);
}

#[test]
fn test_with_zeros() {
    let nums = vec![0, 0, 0, 1, 1, 2];
    let k = 2;
    let result: HashSet<i32> = Solution::top_k_frequent(nums, k).into_iter().collect();
    let expected: HashSet<i32> = vec![0, 1].into_iter().collect();
    assert_eq!(result, expected);
}

#[test]
fn test_all_elements_same_frequency() {
    let nums = vec![1, 2, 3, 4];
    let k = 4;
    let result: HashSet<i32> = Solution::top_k_frequent(nums, k).into_iter().collect();
    let expected: HashSet<i32> = vec![1, 2, 3, 4].into_iter().collect();
    assert_eq!(result, expected);
}
