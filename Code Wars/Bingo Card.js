// 6 kyu - Bingo Card

// Description:
// After yet another dispute on their game the Bingo Association decides to change course and automate the game.

// Can you help the association by writing a method to create a random Bingo card?

// Bingo Cards
// A Bingo card contains 24 unique and random numbers according to this scheme:

// 5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75
// Task
// Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:

// [ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
// The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

// Solution:

function getCard() {
    let card = []
    while(card.length<5){
      let number = Math.floor(Math.random()*14)+1
      if (!card.some(x=>x=='B'+ number)) card.push('B'+ number)
    }
    while(card.length<10){
      let number = Math.floor(Math.random()*15)+16
      if (!card.some(x=>x=='I'+ number)) card.push('I'+ number)
    }
    while(card.length<14){
      let number = Math.floor(Math.random()*15)+31
      if (!card.some(x=>x=='N'+ number)) card.push('N'+ number)
    }
    while(card.length<19){
      let number = Math.floor(Math.random()*15)+46
      if (!card.some(x=>x=='G'+ number)) card.push('G'+ number)
    }while(card.length<24){
      let number = Math.floor(Math.random()*15)+61
      if (!card.some(x=>x=='O'+ number)) card.push('O'+ number)
    }

  return card
}