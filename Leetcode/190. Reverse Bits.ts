// 190. Reverse Bits - Easy

// Description:

// Reverse bits of a given 32 bits unsigned integer.

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 below, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 

// Example 1:

// Input: n = 43261596

// Output: 964176192

// Explanation:

// Integer	Binary
// 43261596	00000010100101000001111010011100
// 964176192	00111001011110000010100101000000
// Example 2:

// Input: n = 2147483644

// Output: 1073741822

// Explanation:

// Integer	Binary
// 2147483644	01111111111111111111111111111100
// 1073741822	00111111111111111111111111111110
 

// Constraints:

// 0 <= n <= 231 - 2
// n is even.
 

// Follow up: If this function is called many times, how would you optimize it?

// Solution - Bitwise operations way: 

function reverseBits(n: number): number {
    let res: number =  0

    for (let i=0; i<32; i++){
        let currentBit = n & 1 //last digit of n either 1 or 0
        res = (res << 1) | currentBit //basically adds a 0 to res and if currentBit is 1 it will change to 1
        n = n >> 1 //basically chops off the last bit and adds 0 to the beginning 
    }
    return res

};


//My original solution with String(2) and parseInt('0101001', 2) 


function reverseBits2(n: number): number {
    let bit = n.toString(2).padStart(32, '0') //have to add leading 0's in 32 bit integer
    let rev = bit.split('').reverse().join('')
    return parseInt(rev, 2)
};

