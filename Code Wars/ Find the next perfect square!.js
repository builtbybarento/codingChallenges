// 7 kyu - Find the next perfect square!lllllllllllllllllllllllllLLLLLLLLLLLLLLLL 
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

// Solution:

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Math.sqrt(sq) % 1 == 0 ? (Math.sqrt(sq) + 1 ) **2 : -1
}