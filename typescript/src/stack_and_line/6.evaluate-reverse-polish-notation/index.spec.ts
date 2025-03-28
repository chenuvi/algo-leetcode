import { evalRPN } from "./index";

describe('逆波兰表达式求值', () => {
  test('基本四则运算', () => {
    expect(evalRPN(["2","1","+","3","*"])).toBe(9);
    expect(evalRPN(["4","13","5","/","+"])).toBe(6);
  });

  test('除法截断处理', () => {
    expect(evalRPN(["7","2","/"])).toBe(3);
    expect(evalRPN(["-8","3","/"])).toBe(-2);
  });

  test('多运算符混合运算', () => {
    expect(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])).toBe(22);
  });

  test('边界值测试', () => {
    expect(evalRPN(["42"])).toBe(42);
  });

  test('包含负数的运算', () => {
    expect(evalRPN(["3","-4","*"])).toBe(-12);
    expect(evalRPN(["-6","-2","/"])).toBe(3);
  });
});