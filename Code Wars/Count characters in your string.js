// 6 kyu Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}

function count(string) {
    const solution = {}
    string.split('').forEach(x=>{
      (solution[x]) ? solution[x] += 1 : solution[x] = 1
    })
    return solution;
  }
  

