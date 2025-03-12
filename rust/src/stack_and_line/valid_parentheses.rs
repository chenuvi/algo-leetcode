use std::collections::HashMap;

pub struct Solution {}

#[allow(dead_code)]
impl Solution {
    pub fn is_valid(s: String) -> bool {
        if (s.len() % 2) != 0 {
            return false;
        }
        let mut stack = vec![];
        let mp = [(b'(', b')'), (b'[', b']'), (b'{', b'}')]
            .iter()
            .cloned()
            .collect::<HashMap<_, _>>();
        for c in s.bytes() {
            // c 是左括号
            if let Some(&v) = mp.get(&c) {
                stack.push(v);
                // c 是右括号
            } else if stack.pop() != Some(c) {
                // 没有左括号，或者左括号类型不对
                return false;
            }
        }
        stack.is_empty()
    }
}
