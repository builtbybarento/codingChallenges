// 6 kyu - Bouncing Balls

// Description - 

// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).


//Solution: 

function bouncingBall(h,  bounce,  window) {
    if(h<=0 || bounce<=0 || bounce>= 1 || window>= h) return -1
    let result = 1
    while(h>window){
      h*=bounce
      if(h>window) result+=2 
    }
    return result
  }















  //prep

//paramaters: height (h), bounce height as a percent (bounce), mothers height (window)

//result: how many times is the ball going to pass the window after dropping from the window and bouncing at a specified rate
          //+1 for the drop. if conditions not met return -1

//example: ball drops from h=3m, bounce = 0.5, window = 1.5m. 
// ball drops (+1), ball bounces to 1.5m and falls (+2), ball bounces to 0.75m and falls (+0), 
//count has ended when the ball starts bouncing lower than the window
//total is 3 times

//pseudocode: start with if h<=0 || bounce<=0 || bounce>= 1 || window>= h return -1
//loop. define result as default 1. for each bounce h is multiplied by bounce
//for each bounce that reaches an h that is greater than window, add +2 to result
//when h is less than window, break