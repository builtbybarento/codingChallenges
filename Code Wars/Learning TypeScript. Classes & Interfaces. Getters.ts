// 7 kyu - Learning TypeScript. Classes & Interfaces. Getters
// Description:
// Learning TypeScript. Classes & Interfaces. Getters
// N.B.: To solve this kata you need to choose "2.4/ES6" target.

// Task
// Define the following classes:

// I. Cuboid
// The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

// The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

// II. Cube
// Class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

// Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

// Articles of Interest
// Below are some articles of interest that may help you complete this Kata:

// Stack Overflow - What are getters and setters in ES6?
// getter - Javascript | MDN

// Solution:

export class Cuboid {
  length: number
  width: number
  height: number
  constructor(length: number, width: number, height: number){
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get surfaceArea(): number{
    return this.width*2*this.length + this.length*2*this.height + this.height*2*this.width
   
  } 
  get volume(): number{
    return this.height*this.length*this.width
  } 
}

export class Cube extends Cuboid {
  constructor(length:number){
    super(length, length, length)
  }
}


//cuboid should take three argumentgs length width height and store in this.length. .. respectively
//then have a getter surfaceArea which returns the surgace area of the cuboid and a getter volume for the volume