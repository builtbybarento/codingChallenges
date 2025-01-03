// 20. Valid Parentheses - Easy

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


// Solution: 

//in hindsight I should have just used a stack, or at least String.prototype.replace() instead of splice and finding indices.


/**
 * @param {string} 
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = s.split('')
    while(arr.length>0){
        let closingBracket = arr.findIndex(x=>x==')' || x==']' || x=='}') //first closing bracket
        if (arr[closingBracket] == ')' && arr[closingBracket-1] == '(' ||
            arr[closingBracket] == '}' && arr[closingBracket-1] == '{' ||
            arr[closingBracket] == ']' && arr[closingBracket-1] == '['){
                arr.splice(closingBracket-1, 2)
            } else break
    }
    return arr.length == 0 ? true : false
};



//search from beginning for closing bracket, then search the splice reversed for opening bracket
//if to the right is the closing bracket, remove them both from array and continue
//continue until all brackets have been closed 

//([{}]) ([]{}) ([{()}])()


