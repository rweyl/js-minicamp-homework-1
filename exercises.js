//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  //return num after subtracting five
  var difference = num - 5;
  return difference;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  if (str1.length == str2.length) {
    return true;
  }
  else {
    return false;
  }
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  if (x === y) {
    return true;
  }
  else {
    return false;
  }
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  if (num < 90) {
    return true;
  }
  else {
    return false;
  }
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  if (num > 50) {
    return true;
  }
  else {
    return false;
  }
}

function add(x, y) {
  //add x and y together and return the value
  var addition = x + y;
  return addition;
}

function subtract(x, y) {
  //subtract y from x and return the value
  var subtraction = x - y;
  return subtraction;
}

function divide(x, y) {
  //divide x by y and return the value
  var division = x / y;
  return division;
}

function multiply(x, y) {
  //multiply x by y and return the value
  var multiplication = x * y;
  return multiplication; 
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  var remainder = x % y;
  return remainder;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  if (num % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

function isOdd(num) {
  //return true if num is odd
  if (num % 2 != 0) {
    return true;
  }
  else {
    return false;
  }
  
}

function square(num) {
  //square num and return the new value
  var squareIt = Math.pow(num, 2);
  return squareIt;
}

function cube(num) {
  //cube num and return the new value
  var cubeIt = Math.pow(num, 3);
  return cubeIt;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  var powerUp = Math.pow(num, exponent);
  return powerUp;
}

function roundNumber(num) {
  //round num and return it
  var roundIt = Math.round(num);
  return roundIt;
}

function roundUp(num) {
  //round num up and return it
  var ceilIt = Math.ceil(num);
  return ceilIt;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  var excitement = str + '!';
  return excitement;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  var greeting = 'Hello ' + name + '!';
  return greeting;
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  var rectArea = length * width;
  return rectArea;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  var triArea = 1/2 * base * height;
  return triArea;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  var rSquared = Math.pow(radius, 2);
  var pi = Math.PI;
  return Math.round(rSquared * pi);
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  var volume = length * width * height;
  return volume;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
