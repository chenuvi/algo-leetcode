use algo_leetcode::Solution;

#[test]
fn test_empty_string() {
    assert!(Solution::is_valid("".to_string()));
}

#[test]
fn test_valid_parentheses() {
    assert!(Solution::is_valid("()".to_string()));
    assert!(Solution::is_valid("()[]{}".to_string()));
    assert!(Solution::is_valid("{[]}".to_string()));
}

#[test]
fn test_invalid_parentheses() {
    assert!(!Solution::is_valid("(]".to_string()));
    assert!(!Solution::is_valid("([)]".to_string()));
    assert!(!Solution::is_valid("]".to_string()));
}

#[test]
fn test_incomplete_parentheses() {
    assert!(!Solution::is_valid("(".to_string()));
    assert!(!Solution::is_valid("(((".to_string()));
    assert!(!Solution::is_valid("{[".to_string()));
}

#[test]
fn test_invalid_characters() {
    assert!(!Solution::is_valid("a".to_string()));
    assert!(!Solution::is_valid("(a)".to_string()));
}
