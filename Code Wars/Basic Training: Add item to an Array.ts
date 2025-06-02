// 8 kyu - Basic Training: Add item to an Array

// Description:
// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// export const websites: string[] = [];

// Solution:

import { websites } from "./preloaded";
// add the value "codewars" to the `websites` array
websites.push('codewars')

export { websites };