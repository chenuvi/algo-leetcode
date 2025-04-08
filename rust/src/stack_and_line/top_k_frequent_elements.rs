use crate::Solution;

impl Solution {
    pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut count_map = std::collections::HashMap::new();
        for num in nums {
            *count_map.entry(num).or_insert(0) += 1; 
        }
        let mut count_vec: Vec<(i32, i32)> = count_map.iter().map(|(k, v)| (*k, *v)).collect();
        count_vec.sort_by(|a, b| b.1.cmp(&a.1));
        count_vec.iter().map(|(k, _)| *k).take(k as usize).collect();
        let res =  count_vec.into_iter().map(|(num, _)| num).collect();
        res
    }
}
