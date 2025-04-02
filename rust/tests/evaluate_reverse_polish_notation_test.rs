use algo_leetcode::Solution;

#[test]
fn test_basic_arithmetic() {
    assert_eq!(
        Solution::eval_rpn(vec![
            "2".to_string(),
            "1".to_string(),
            "+".to_string(),
            "3".to_string(),
            "*".to_string()
        ]),
        9
    );
    assert_eq!(
        Solution::eval_rpn(vec![
            "4".to_string(),
            "13".to_string(),
            "5".to_string(),
            "/".to_string(),
            "+".to_string()
        ]),
        6
    );
}

#[test]
fn test_division_truncation() {
    assert_eq!(
        Solution::eval_rpn(vec!["7".to_string(), "2".to_string(), "/".to_string()]),
        3
    );
    assert_eq!(
        Solution::eval_rpn(vec!["-8".to_string(), "3".to_string(), "/".to_string()]),
        -2
    );
}

#[test]
fn test_complex_expression() {
    assert_eq!(
        Solution::eval_rpn(vec![
            "10".to_string(),
            "6".to_string(),
            "9".to_string(),
            "3".to_string(),
            "+".to_string(),
            "-11".to_string(),
            "*".to_string(),
            "/".to_string(),
            "*".to_string(),
            "17".to_string(),
            "+".to_string(),
            "5".to_string(),
            "+".to_string()
        ]),
        22
    );
}

#[test]
fn test_single_number() {
    assert_eq!(Solution::eval_rpn(vec!["42".to_string()]), 42);
}

#[test]
fn test_negative_numbers() {
    assert_eq!(
        Solution::eval_rpn(vec!["3".to_string(), "-4".to_string(), "*".to_string()]),
        -12
    );
    assert_eq!(
        Solution::eval_rpn(vec!["-6".to_string(), "-2".to_string(), "/".to_string()]),
        3
    );
}
