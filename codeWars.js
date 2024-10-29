https://www.codewars.com/users/barento


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
            
            console.log(newData)
            
            //now the code has removed everything that doesnt get pushed into the array
            
            newData = newData.split('o')
            
                console.log(newData) //['iiii', 'iiiis', 'iiiid']
            
            let result = []
            let val = 0
            newData.forEach(x=>{
                
                for(let i = 0; i<x.length; i++){
                x[i] == 'i' ? val+= 1 : x[i] == 'd'  ? val -= 1: x[i] == 's' ? val *= val : val+= 0
                }
                result.push(val)
            })            
            return result
        }
            //   let arr = newData.split('o')
            //   let newArr = []
            //   arr.forEach(x=>{
            //     let val = 0
            //     for(let i = 0; i<str.length; i++){
            //       str[i] == 'i' ? val+= 1 : str[i] == 'd'  ? val -= 1: val *= val
            //     }
            //     newArr.push(val)   //old code refactored

            //   while(data[data.length-1] != 'o'){
            //     data = data.slice(0, data.length-2)
            
            //find index of last o, return slice

