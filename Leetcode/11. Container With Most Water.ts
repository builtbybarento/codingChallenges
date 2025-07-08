// 11. Container With Most Water - Medium 

// Description:

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// Solution:

function maxArea(height: number[]): number {
    let left = 0
    let right = height.length - 1 
    let area = (right-left)*Math.min(height[left],height[right])
    while(left<right){
        if (height[left]>height[right]) right--
        else left++
        area = Math.max(area, (right-left)*Math.min(height[left],height[right]))
        // console.log(left, right, area)
    }
    return area
};

//on^2 solution is check every pair and see which makes the biggest volume
//need some kind of linear type solution that only checks each value once
//maybe start in the middle? 

///start at the ends? left=0 right=height.length
//need to find the two heights that are the highest and furthest apart
//take the shorter one and move over. if higher area update it 