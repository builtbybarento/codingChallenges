// 5 kyu - Vector class

// Description:
// Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

// a = new Vector([1, 2, 3])
// b = new Vector([3, 4, 5])
// c = new Vector([5, 6, 7, 8])

// a.add(b)      # should return a new Vector([4, 6, 8])
// a.subtract(b) # should return a new Vector([-2, -2, -2])
// a.dot(b)      # should return 1*3 + 2*4 + 3*5 = 26
// a.norm()      # should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// a.add(c)      # throws an error
// If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

// Also provide:

// a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
// an equals method, to check that two vectors that have the same components are equal
// Note: the test cases will utilize the user-provided equals method.

// Solution:

export class Vector {
  arr: number[]
  
  constructor(components: number[]) {
    this.arr = components
  }
  
  add(obj: Vector): Vector {
    if (obj.arr.length != this.arr.length) throw new Error()
    let newArr: number[] = []
    for(let i=0; i<this.arr.length; i++){
      newArr.push(this.arr[i] + obj.arr[i])
    }
    return new Vector(newArr)
  }
  
  subtract(obj: Vector): Vector {
    if (obj.arr.length != this.arr.length) throw new Error()
    let newArr: number[] = []
    for(let i=0; i<this.arr.length; i++){
      newArr.push(this.arr[i] - obj.arr[i])
    }
    return new Vector(newArr)
  }
  
  dot(obj: Vector): number {
    if (obj.arr.length != this.arr.length) throw new Error()
    let newArr: number[] = []
    for(let i=0; i<this.arr.length; i++){
      newArr.push(this.arr[i] * obj.arr[i])
    }
    return newArr.reduce((acc,x)=>acc+x, 0)
  }
   norm(): number {
     return Math.sqrt(this.arr.reduce((acc,x)=>acc+x**2,0))
   }
  
  equals(obj: Vector): boolean{
    for(let i=0; i<this.arr.length; i++){
      if(this.arr[i] != obj.arr[i]) return false
    }return true
  }
  
  toString(): string{
    return `(${this.arr.join(',')})`
  }
};

//create an object class that supports addition, subtraction, dot product, and norms
//if you add 2 vectors, they will add their corresponding values. ie a.add(b) [1,2,3] [3,4,5] ==> [4,6,8]
//if you subtract 2 vectors, they will minus the corresponding values ie a.add(b)==> [-2,-2,-2]
//dot a.dot(b) ===> 1*3 +  2*4 + 3*5 = 26 (returns a number)
//also a .toString method that turns an array to '(4,6,8)' with brackets around. 