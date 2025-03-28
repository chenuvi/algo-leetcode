pub struct Solution {}

#[allow(dead_code)]
impl Solution {
    pub fn eval_rpn(tokens: Vec<String>) -> i32 {
        let mut stack = vec![];
        for token in tokens.into_iter() {
            match token.as_str() {
                "+" => {
                    let a = stack.pop().unwrap();
                    *stack.last_mut().unwrap() += a;
                }
                "-" => {
                    let a = stack.pop().unwrap();
                    *stack.last_mut().unwrap() -= a;
                }
                "*" => {
                    let a = stack.pop().unwrap();
                    *stack.last_mut().unwrap() *= a;
                }
                "/" => {
                    let a = stack.pop().unwrap();
                    *stack.last_mut().unwrap() /= a;
                }
                _ => {
                    stack.push(token.parse::<i32>().unwrap());
                }
            }
        }
        stack.pop().unwrap()
    }
}
