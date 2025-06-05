// 7 kyu - Switcheroo 

// Description:
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// Solution:

export function switcheroo(x: string): string {
  return x.replaceAll('a','!').replaceAll('b','a').replaceAll('!','b')
}