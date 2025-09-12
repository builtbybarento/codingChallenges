// 3227. Vowels Game in a String - Medium

// Description:

// Alice and Bob are playing a game on a string.

// You are given a string s, Alice and Bob will take turns playing the following game where Alice starts first:

// On Alice's turn, she has to remove any non-empty substring from s that contains an odd number of vowels.
// On Bob's turn, he has to remove any non-empty substring from s that contains an even number of vowels.
// The first player who cannot make a move on their turn loses the game. We assume that both Alice and Bob play optimally.

// Return true if Alice wins the game, and false otherwise.

// The English vowels are: a, e, i, o, and u.

 

// Example 1:

// Input: s = "leetcoder"

// Output: true

// Explanation:
// Alice can win the game as follows:

// Alice plays first, she can delete the underlined substring in s = "leetcoder" which contains 3 vowels. The resulting string is s = "der".
// Bob plays second, he can delete the underlined substring in s = "der" which contains 0 vowels. The resulting string is s = "er".
// Alice plays third, she can delete the whole string s = "er" which contains 1 vowel.
// Bob plays fourth, since the string is empty, there is no valid play for Bob. So Alice wins the game.
// Example 2:

// Input: s = "bbcd"

// Output: false

// Explanation:
// There is no valid play for Alice in her first turn, so Alice loses the game.

 

// Constraints:

// 1 <= s.length <= 105
// s consists only of lowercase English letters.

// Solution:

function doesAliceWin(s: string): boolean {
    let vowels = 'aeiou'
    for (let letter of s){
        if (vowels.includes(letter)) return true
    }
    return false
};
//player 1 deletes substring with odd number of vowels
//player 2 deletes substring with even number of vowels
//return if player 1 wins, assuming each player plays optimally
//somehow player 1 needs to clear the board, making sure player 2 cant do it first
//player 1 needs to be able to clear a substring with odd number of vowels and leave a substring with odd values
//so if there is some number of vowels that can subtract an odd number of vowels then playher 1 can win
//if theres 2 vowles like kkkkokkkko she can just remove kkkko -> kkko ---> ___ 
//say theres a word like koko. she removes ko. bob removes k. sheremoves o
//word like kok. she removes it all
//word like koo. she removes ko. bob cant remove anything else he loses. 