// 6 kyu - Ticker

// Description - 

// While using public transport we could see simple displays with a ticker. It often provides information about next stations and expected arrival time.

// Let's implement a function which will return a chunk of text to be displayed on a display of fixed width. The function should take text to display, width of the display and tick as a step of the ticker. The function will be called many times with tick parameter constantly incrementing.

// At very beginning the display is empty. At first step only one character should be displayed in the most right position and so on. When the message is displayed, it should be dissapear char by char to left position and return to blank state of the display. After that cycle should start again.

// For example

// ticker('Hello world!', 10, 4)   // '      Hell'
// We could expect that our function will be called from simple script like this one

// const demo = (text, width) => {
//   let tick = 0;
//   setInterval(_ => {
//     someDisplayFunction(ticker(text, width, tick));
//     tick++ 
//   }, 100);
// }

// Solution:

const ticker = (text, width, tick) => {
    const totalText = ' '.repeat(width) + text   //'          Hello world!'. 
    // console.log(totalText)
    
    //need the net movement. starting on spot 4 after 4. only 10 items sliced max. 
    const netMovement = tick % totalText.length   ///still 4 
    // console.log(netMovement)
    let newText = totalText.slice(netMovement, netMovement + width)
    return newText + totalText.slice(0, width - newText.length)
  }
  ticker('Hello world!', 10, 21)   // '      Hell'
  //p text, screen width in characters, and the amount of times the words move across the screen
  //return the screen reading after the indicated amount of ticks
  //ticker('Hello world!', 10, 4)   // '      Hell'
  
  //first need to figure out the total string that will be displayed.
    //can probably just slice this based on the total displacement
  //to find the total string, just add the starting amount of spaces and the text
  //take the total ticks and divide by length of the total string, get the remainder
  //using this remainder, will have to displace the string
  
  //total string = '          Hello world!'. 
  
  //return slice(remainder)
  
  
  // if the slice is not as big as the window, add more from the beginning
  // +slice(0, )  need to get width - slice.length 
  
  // where slice.length = total string.length - remainder
  
  // return slice(remainder) + slice(0, total string.length - remainder)