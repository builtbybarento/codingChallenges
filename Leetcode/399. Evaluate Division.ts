// 399. Evaluate Division - Medium 

// Description:

// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

// Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.

 

// Example 1:

// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation: 
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? 
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
// note: x is undefined => -1.0
// Example 2:

// Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// Output: [3.75000,0.40000,5.00000,0.20000]
// Example 3:

// Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// Output: [0.50000,2.00000,-1.00000,-1.00000]
 

// Constraints:

// 1 <= equations.length <= 20
// equations[i].length == 2
// 1 <= Ai.length, Bi.length <= 5
// values.length == equations.length
// 0.0 < values[i] <= 20.0
// 1 <= queries.length <= 20
// queries[i].length == 2
// 1 <= Cj.length, Dj.length <= 5
// Ai, Bi, Cj, Dj consist of lower case English letters and digits.

// Solution:

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    let graph: Map<string, Map<string, number>> = new Map()
    for(let i=0; i<equations.length; i++){
        const [A,B] = [equations[i][0], equations[i][1]]
        //now make the graph
        if (!graph.has(A)) graph.set(A, new Map())
        graph.get(A).set(B, values[i])
        if (!graph.has(B)) graph.set(B, new Map())
        graph.get(B).set(A, 1/values[i])
        
    } //console.log(graph)
    let ans: number[] = []
    for (const query of queries){
        //console.log(query)
        const [C,D] = [query[0],query[1]]
        if (!graph.has(C) || !graph.has(D)) {
            ans.push(-1)
            continue
        }
        let seen: Set<string> = new Set() //record values seen
        let res: number = check(C,D,seen)
        ans.push(res)
        //now check every value of C to find something connected to D 
    }
    function check(A: string, B: string, seen: Set<string>): number{
        //console.log(A, B)
        if (!graph.has(A) || !graph.has(B)) return -1 //fail if values not found
        if (graph.get(A).has(B)) return graph.get(A).get(B) //return the base value A/B
        seen.add(A) //keep track of checked positions
        for (const [C,D] of graph.get(A)){
            if (!seen.has(C)){ //dont repeat routes
                const x = check(C,B,seen)     //keep checking until B is found, else -1 for dead end
                if (x !== -1) return graph.get(A).get(C) * x
            }//dont return if dead end
        }
        return -1    //return -1 for dead end
    }
    return ans
};

//given 2 arrays, equations and values where equations[i][a]/equations[i][b] = values[i]
//also given queries. return an array of answers to the queries. if no answer return -1
//ex [[a,b][b,c]][2,3], queries [[a,c][b,a][a,e][a,a][x,x]] -> [6, 0.5, -1, 1,-1]

//so if it goes forward through the array it gives the result, if backwards its 1/result (inverse)
//a,c. look at map for a. maybe recursively check through the connectinos from a until c is found.
//find a->b. then b->c. a * check b . b->c condition passed
//what if theres more than one step. a->b. b->d. b->x d->c. check a->b, b->d, b->x, x->c. would check a->b. then b->d->-> find nothing return 
//keep going in recursive loop. b->x. x->c 