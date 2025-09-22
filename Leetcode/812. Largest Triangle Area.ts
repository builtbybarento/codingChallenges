// 812. Largest Triangle Area - Easy

// Description:

// Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.

 

// Example 1:


// Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
// Output: 2.00000
// Explanation: The five points are shown in the above figure. The red triangle is the largest.
// Example 2:

// Input: points = [[1,0],[0,0],[0,1]]
// Output: 0.50000
 

// Constraints:

// 3 <= points.length <= 50
// -50 <= xi, yi <= 50
// All the given points are unique.

// Solution:

function largestTriangleArea(points: number[][]): number {
    let max = 0
    for (let i=0; i<points.length-2; i++){
        for (let j=i+1; j<points.length-1; j++){
            for (let k=j+1; k<points.length; k++){
                const area = 0.5 * Math.abs( points[i][0] * (points[j][1]-points[k][1]) + points[j][0] * (points[k][1]-points[i][1]) + points[k][0]*(points[i][1]-points[j][1]) )
                if (area>max) max = area
            }
        }
    }
    return max
};
//Area=21​∣x1​(y2​−y3​)+x2​(y3​−y1​)+x3​(y1​−y2​)∣
//give array of points on x-y plane points where points[i] = [xi, yi], return the largest area of a triangle that can be formed by any 3 different points. 
//ex points = [[0,0][0,1][1,0][0,2][2,0]]
    //the biggest triangle is formed from 0,0 0,2 2,0 = 2 

//need to take the length x width / 2 ? find the 2 shortest edges and make a rectangle then divide by 2
//just loop through and compare the 3 values. multiply all of them and divide by the max to remove it. 