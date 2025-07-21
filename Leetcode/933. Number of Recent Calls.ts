// 933. Number of Recent Calls - Easy 

// Description:

// You have a RecentCounter class which counts the number of recent requests within a certain time frame.

// Implement the RecentCounter class:

// RecentCounter() Initializes the counter with zero recent requests.
// int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
// It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

 

// Example 1:

// Input
// ["RecentCounter", "ping", "ping", "ping", "ping"]
// [[], [1], [100], [3001], [3002]]
// Output
// [null, 1, 2, 3, 3]

// Explanation
// RecentCounter recentCounter = new RecentCounter();
// recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
// recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
// recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
// recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
 

// Constraints:

// 1 <= t <= 109
// Each test case will call ping with strictly increasing values of t.
// At most 104 calls will be made to ping.

// Solution: (less optimal slice version)

class RecentCounter {
    private log: number[]
    start: number

    constructor() {
        this.log = []
        this.start = 0
    }

    ping(t: number): number {
        this.log.push(t)
        while(this.log[this.start]<t-3000){
            this.start++
        }
        return this.log.slice(this.start).length
    }

}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
 

 //class RecentCounter counts the number of recent requests within a certain time frame
 //RecentCounter() inititallizes the counter at 0
 //ping(t) adds a new request at time t where t represents milliseconds and returns the number of requests that happened in the pas 3000 ms (including the new request). specifically, return the number of reqs that have happened in the range (t-3000, t)
 //guaranteed that every call to ping usese a strictly larger t value than the last

 //ex. input: ["RecentCounter", "ping", "ping", "ping", "ping"] [[], [1], [100], [3001], [3002]]
 //     output: [null, 1,2,3,3]

 //so first Recent Counter has to be called to initialize the counter. then ping gets called with an input val t. so return any inputs at time>t-3000

 //Better 2 pointer solution:

 class RecentCounter2 {
    private log: number[]
    start: number
    count: number

    constructor() {
        this.log = []
        this.start = 0
        this.count = 0
    }

    ping(t: number): number {
        this.log.push(t)
        this.count++
        while(this.log[this.start]<t-3000){
            this.start++
        }
        return this.count-this.start
    }

}