// 5 kyu - Mixbonacci

// Description:
// This is the first of my "-nacci" series. If you like this kata, check out the zozonacci sequence too.

// Task
// Mix -nacci sequences using a given pattern p.
// Return the first n elements of the mixed sequence.
// Rules
// The pattern p is given as a list of strings (or array of symbols in Ruby) using the pattern mapping below (e. g. ['fib', 'pad', 'pel'] means take the next fibonacci, then the next padovan, then the next pell number and so on).
// When n is 0 or p is empty return an empty list.
// If n is more than the length of p repeat the pattern.
// Examples
//             0  1  2  3  4  
// ----------+------------------
// fibonacci:| 0, 1, 1, 2, 3 ...
// padovan:  | 1, 0, 0, 1, 0 ...
// pell:     | 0, 1, 2, 5, 12 ...

// pattern = ['fib', 'pad', 'pel']
// n = 6
// #          ['fib',        'pad',      'pel',   'fib',        'pad',      'pel']
// # result = [fibonacci(0), padovan(0), pell(0), fibonacci(1), padovan(1), pell(1)]
// result = [0, 1, 0, 1, 0, 1]

// pattern = ['fib', 'fib', 'pel']
// n = 6
// #          ['fib', 'fib', 'pel', 'fib', 'fib', 'pel']
// # result = [fibonacci(0), fibonacci(1), pell(0), fibonacci(2), fibonacci(3), pell(1)]
// result = [0, 1, 0, 1, 2, 1]
// Sequences
// fibonacci : 0, 1, 1, 2, 3 ...
// padovan: 1, 0, 0, 1, 0 ...
// jacobsthal: 0, 1, 1, 3, 5 ...
// pell: 0, 1, 2, 5, 12 ...
// tribonacci: 0, 0, 1, 1, 2 ...
// tetranacci: 0, 0, 0, 1, 1 ...
// Pattern mapping
// 'fib' -> fibonacci
// 'pad' -> padovan
// 'jac' -> jacobstahl
// 'pel' -> pell
// 'tri' -> tribonacci
// 'tet' -> tetranacci

// Solution:

export function mixbonacci (pattern: string[], length: number): number[] {
  let fib: number[] = [0, 1]
  let pad: number[] = [1, 0, 0]
  let jac: number[] = [0, 1]
  let pel: number[] = [0, 1]
  let tri: number[] = [0, 0, 1]
  let tet: number[] = [0, 0, 0, 1]
  let n: number = 0
  let res: number[] = []
  for (let i: number = 0; i < length; i++){
    if (!pattern[n]) n=0.
    if(pattern[n] == 'fib') {
      fib.push(fib[1] + fib[0])
      res.push(fib.shift()!)
    }
    if (pattern[n] == 'pad') {
      pad.push(pad[1] + pad[0])
      res.push(pad.shift()|| 0)
    }
    if (pattern[n] == 'jac') {
      jac.push(jac[1] + 2*jac[0])
      res.push(jac.shift()!)
      }
    if (pattern[n] == 'pel') {
      pel.push(2*pel[1] + pel[0])
      res.push(pel.shift()!)
        }
    if (pattern[n] == 'tri') {
      tri.push(tri[2] + tri[1] + tri[0] )
      res.push(tri.shift()!)
    }
    if (pattern[n] == 'tet') {
      tet.push(tet[3] + tet[2] + tet[1] + tet[0])
      res.push(tet.shift()!)
    }
    n++
  }
  return res
}
  

//mix the sequences using a given pattern and
//reutnr the first n elements of the mixed sequence 
//given patterns are fib(onacci), pad(ovan), jac(obstahl), pel(l), tri(bonacci), tet(ranacci)
//ex pattern = fib, pad, pel and n=6 ===> fibbonaci[0], pad[0], pel[0], fib[1], pad[1], pel[1]

//ex pattern = fib, fib, pel; n=6 ==> fib[0], fib[1], pel[0], fib[2], fib[3], pel[1] 