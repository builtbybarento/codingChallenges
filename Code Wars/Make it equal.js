// 6 kyu - Make it equal

// Here we have a strange looking expression.

// (a == 2 && a == 3);
// Your task is to make this expression true (see testcase).

// HINT: javascript coercion rules.

// Solution: 

let i = 2
class Num {
  valueOf = () => i++
}
var a = new Num() 


(a==2 && a==3) // true
