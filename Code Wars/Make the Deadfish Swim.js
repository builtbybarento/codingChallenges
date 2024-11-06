// 6 kyu Make the Deadfish Swim
//         JavaScript
//         Description:
//         Create a parser to interpret and execute the Deadfish language.

//         Deadfish operates on a single value in memory, which is initially set to 0.

//         It uses four single-character commands:

//         i: Increment the value
//         d: Decrement the value
//         s: Square the value
//         o: Output the value to a result array
//         All other instructions are no-ops and have no effect.

//         Examples
//         Program "iiisdoso" should return numbers [8, 64].
//         Program "iiisdosodddddiso" should return numbers [8, 64, 3600].

//Solution
        function parse( data ){
            if (!data.includes('o')) return []
            
            let ind = data.split('').findLastIndex((element) => element == 'o')
            let newData = data.slice(0, ind)
            //now the code has removed everything that doesnt get pushed into the array. might have been unnecessary depending on the test cases presented but I'm not sure
            
            newData = newData.split('o')
            let result = []
            let val = 0
            newData.forEach(x =>{
                for(let i = 0; i < x.length; i++){
                x[i] == 'i' ? val+= 1 : x[i] == 'd'  ? val -= 1: x[i] == 's' ? val *= val : val += 0
                }
                result.push(val)
            })            
            return result
        }
