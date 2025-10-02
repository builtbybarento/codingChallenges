// 435. Non-overlapping Intervals - Medium 

// Description:

// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

 

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

// Constraints:

// 1 <= intervals.length <= 105
// intervals[i].length == 2
// -5 * 104 <= starti < endi <= 5 * 104

// Solution:

function eraseOverlapIntervals(intervals: number[][]): number {
    intervals = intervals.sort((a,b)=> a[1]-b[1])

    let res = [intervals[0]]
    for (const int of intervals){
        if (res[res.length-1][1] > int[0]) continue //last end time greater than current start time
        res.push(int)
    }
    return intervals.length - res.length
};
//given an array of intervals, return the minimum number of intervals you can remove to make the rest of the intervals non-overlapping
//ex 1,2 2,3 3,4 1,3. get rid of 1,3 and the rest are not overlapping. so res = 1
//ex 1,2 1,2 1,2 -> need to remove 2 and they will not overlap. 
//maybe just sort by start time and end time then remove any overlaps
//ex 1,2 2,3 3,4... -> 1,2 1,3 2,3 3,4 and just remove 1,3
//need to maybe do a dfs type solution here ? 