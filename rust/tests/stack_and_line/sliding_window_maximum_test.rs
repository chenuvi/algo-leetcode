use algo_leetcode::Solution;

#[test]
fn test_basic_case() {
    let nums = vec![1, 3, -1, -3, 5, 3, 6, 7];
    let k = 3;
    assert_eq!(
        Solution::max_sliding_window(nums, k),
        vec![3, 3, 5, 5, 6, 7]
    );
}

#[test]
fn test_single_element() {
    let nums = vec![1];
    let k = 1;
    assert_eq!(Solution::max_sliding_window(nums, k), vec![1]);
}

#[test]
fn test_k_equals_array_length() {
    let nums = vec![1, 2, 3, 4];
    let k = 4;
    assert_eq!(Solution::max_sliding_window(nums, k), vec![4]);
}

#[test]
fn test_array_with_negative_numbers() {
    let nums = vec![-7, -8, 7, 5, 7, 1, 6, 0];
    let k = 4;
    assert_eq!(Solution::max_sliding_window(nums, k), vec![7, 7, 7, 7, 7]);
}

#[test]
fn test_k_equals_one() {
    let nums = vec![1, -1];
    let k = 1;
    assert_eq!(Solution::max_sliding_window(nums, k), vec![1, -1]);
}
