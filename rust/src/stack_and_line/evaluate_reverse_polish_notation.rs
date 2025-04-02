use crate::Solution;
use std::collections::HashMap;

#[allow(dead_code)]
impl Solution {
    pub fn eval_rpn(tokens: Vec<String>) -> i32 {
        let mut stack = vec![];
        /*
         * 解法二：定义操作策略映射，使用特征对象存储闭包
         * 这种方法使用了特征对象（trait object）来存储不同操作符对应的闭包
         * 优点：扩展性强，可以轻松添加新的操作符
         * 缺点：实现稍微复杂，需要定义特征对象和闭包
         */

        let mut operations: HashMap<&str, Box<dyn Fn(i32, i32) -> i32>> = HashMap::new();
        operations.insert("+", Box::new(|a: i32, b: i32| b + a));
        operations.insert("-", Box::new(|a: i32, b: i32| b - a));
        operations.insert("*", Box::new(|a: i32, b: i32| b * a));
        operations.insert("/", Box::new(|a: i32, b: i32| b / a));

        for token in tokens.into_iter() {
            if let Some(operation) = operations.get(token.as_str()) {
                let a = stack.pop().unwrap();
                let b = stack.pop().unwrap();
                stack.push(operation(a, b));
            } else {
                stack.push(token.parse::<i32>().unwrap());
            }
        }

        /*
         * 解法一：使用模式匹配直接处理操作符
         * 这种方法通过 match 语句直接匹配操作符，并对栈顶元素进行相应操作
         * 优点：实现简单直观，无需额外的数据结构
         * 缺点：不易扩展，添加新操作符需要修改核心逻辑
         */
        // for token in tokens.into_iter() {
        //     match token.as_str() {
        //         "+" => {
        //             let a = stack.pop().unwrap();
        //             *stack.last_mut().unwrap() += a;
        //         }
        //         "-" => {
        //             let a = stack.pop().unwrap();
        //             *stack.last_mut().unwrap() -= a;
        //         }
        //         "*" => {
        //             let a = stack.pop().unwrap();
        //             *stack.last_mut().unwrap() *= a;
        //         }
        //         "/" => {
        //             let a = stack.pop().unwrap();
        //             *stack.last_mut().unwrap() /= a;
        //         }
        //         _ => {
        //             stack.push(token.parse::<i32>().unwrap());
        //         }
        //     }
        // }
        stack.pop().unwrap()
    }
}
