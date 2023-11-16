/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

// Returns an area of a rectangle given by width and height.

function getRectangleArea(wight, height) {
  return wight * height;
}
getRectangleArea(5, 10);
getRectangleArea(5, 5);

//  Returns a circumference of circle given by radius.

function getCircleCircumference(radius) {
  const pi = 3.141592653589793;
  return 2 * pi * radius;
}
getCircleCircumference(5);
getCircleCircumference(3.14);
getCircleCircumference(0);

// Returns an average of two given numbers.

function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}
getAverage(5, 5);
getAverage(10, 0);
getAverage(-3, 3);

// Returns a distance between two points by cartesian coordinates.

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
getDistanceBetweenPoints(0, 0, 0, 1);
getDistanceBetweenPoints(0, 0, 1, 0);
getDistanceBetweenPoints(-5, 0, 10, -10);

// Returns a root of linear equation a*x + b = 0 given by coefficients a and b.

function getLinearEquationRoot(a, b) {
  return (0 - b) / a;
}
getLinearEquationRoot(5, -10);
getLinearEquationRoot(1, 8);
getLinearEquationRoot(5, 0);

// Returns an angle (in radians) between two vectors given by xi and yi,
// coordinates in Cartesian plane.
// See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const n = x1 * x2 + y1 * y2;
  const m = x1 ** 2 + y1 ** 2;
  const p = x2 ** 2 + y2 ** 2;
  const h = Math.acos(n / (Math.sqrt(Math.abs(m)) * Math.sqrt(Math.abs(p))));
  return h;
}
getAngleBetweenVectors(1, 0, 0, 1);
getAngleBetweenVectors(0, 1, 0, -1);
getAngleBetweenVectors(0, -1, 1, 0);
getAngleBetweenVectors(0, 1, 0, 1);

// Returns a last digit of a integer number.
// The input parameter will always be greater than or equal to zero and will be in decimal notation.

function getLastDigit(value) {
  return value % 10;
}
getLastDigit(100);
getLastDigit(37);
getLastDigit(5);
getLastDigit(0);

// Returns a number by given string representation.

function parseNumberFromString(value) {
  return +value;
}
parseNumberFromString('100');
parseNumberFromString('37');
parseNumberFromString('-525.5');

// Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}
getParallelepipedDiagonal(1, 1, 1);
getParallelepipedDiagonal(3, 3, 3);
getParallelepipedDiagonal(1, 2, 3);

// Returns the number rounded to specified power of 10.

function roundToPowerOfTen(num, pow) {
  let a;
  if (pow === 0) {
    a = num;
  }
  if (pow === 1) {
    a = Math.round(num / 10) * 10;
  }
  if (pow === 2) {
    a = Math.round(num / 100) * 100;
  }
  if (pow === 3) {
    a = Math.round(num / 1000) * 1000;
  }
  return a;
}
roundToPowerOfTen(1234, 0);
roundToPowerOfTen(1234, 1);
roundToPowerOfTen(1234, 2);
roundToPowerOfTen(1234, 3);
roundToPowerOfTen(1678, 0);
roundToPowerOfTen(1678, 1);
roundToPowerOfTen(1678, 2);
roundToPowerOfTen(1678, 3);

// Returns true is the number is prime; otherwise false.

function isPrime(n) {
  let a;
  if (
    (n > 2 && n % 2 === 0) ||
    (n > 3 && n % 3 === 0) ||
    (n > 5 && n % 5 === 0) ||
    (n > 7 && n % 7 === 0)
  ) {
    a = false;
  } else {
    a = true;
  }
  return a;
}
isPrime(2);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(11);
isPrime(12);
isPrime(16);
isPrime(17);

/**
 * Tries to convert value to number and returns it if conversion was successful;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(/* value, def */) {
  throw new Error('Not implemented');
}

// Returns the cube of the given number.

function getCube(num) {
  return num ** 3;
}
getCube(3);
getCube(-2);
getCube(0);

/**
 * Returns the Fibonacci number located at the index position.
 *
 * @param {number} index
 * @return {number}
 *
 * @example:
 *   0  => 0
 *   1  => 1
 *   2  => 1
 *   3  => 2
 *   10 => 55
 */
function getFibonacciNumber(/* index */) {
  throw new Error('Not implemented');
}

// Returns the sum of all numbers from 1 to n.
function getSumToN(n) {
  let sum = 0;
  let i;
  for (i = 1; i <= n; i += 1) {
    sum += i;
  }
  return sum;
}
getSumToN(5);
getSumToN(10);
getSumToN(1);

// Returns the sum of the digits of a given number.

function getSumOfDigits(num) {
  const arr = String(num).split('');
  let sum = 0;
  let i;
  for (i = 0; i < arr.length; i += 1) {
    sum += Number(arr[i]);
  }
  return sum;
}
getSumOfDigits(123);
getSumOfDigits(202);
getSumOfDigits(5);

// Returns true if the given number is a power of two, false otherwise.

function isPowerOfTwo(num) {
  for (let i = 0; i < 30; i += 1) {
    if (2 ** i === num) {
      return true;
    }
  }
  return false;
}
isPowerOfTwo(4);
isPowerOfTwo(16);
isPowerOfTwo(15);
isPowerOfTwo(512);
isPowerOfTwo(1000);

/**
 * Returns the sine of a number.
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   0 => 0
 *   Math.PI / 2 => 1
 */
function getSine(/* num */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in a specified base (radix).
 *
 * @param {number} number
 * @param {number} base
 * @return {string}
 *
 * @example:
 * 255, 16 => 'ff'
 * 2, 2    => '10'
 */
function numberToStringInBase(/* number, base */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in exponential notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '1.23e+4'
 */
function toExponential(/* number, fractionDigits */) {
  throw new Error('Not implemented');
}

// Returns a string representation of a number in fixed-point notation.

function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}
toFixed(12345, 2);
toFixed(12.345, 1);

/**
 * Returns a string representation of a number in normal (fixed-point or exponential)
 * notation rounded to precision significant digits.
 *
 * @param {number} number
 * @param {number} precision
 * @return {string}
 *
 * @example:
 * 12345, 7    => '12345.00'
 * 12.345, 4   => '12.35'
 */
function toPrecision(/* number, precision */) {
  throw new Error('Not implemented');
}

// Returns the primitive value of a Number object.

function getNumberValue(number) {
  return number.valueOf();
}
getNumberValue(5);
getNumberValue(-5);

/**
 * Returns a boolean value indicating whether the parameter is a number or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * Infinity => false
 * NaN      => false
 * 0        => true
 * 'a' / 1  => false
 * 'a'      => false
 * 5        => true
 * '5'      => false
 */
function isNumber(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a boolean value indicating whether a number is an integer or not.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 5    => true
 * 5.1  => false
 * '5'  => false
 */
function isInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a floating point number or, if the number cannot be parsed from the argument, returns NaN.
 *
 * @param {string} str
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh' => 4.567
 * 'abcdefgh'      => NaN
 */
function getFloatOnString(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns an integer of the specified base or, if the number cannot be parsed
 * from the argument, returns NaN.
 *
 * @param {string} str
 * @param {number} base
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh', 10  => 4
 * 'abcdefgh', 10       => NaN
 * '1.234', 2           => 1
 * '10', 8              => 8
 */
function getIntegerOnString(/* str, base */) {
  throw new Error('Not implemented');
}

/**
 * Returns whether a number is a safe integer.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 10       => true
 * 3.5      => false
 * 2 ** 53  => false
 */
function isSafeInteger(/* number */) {
  throw new Error('Not implemented');
}

// Returns the smallest integer less than or equal to a given number.

function roundToSmallestInteger(number) {
  return Math.floor(number);
}
roundToSmallestInteger(5.9);
roundToSmallestInteger(-5.1);

// Returns the largest integer greater than or equal to a given number.

function roundToLargestInteger(number) {
  return Math.ceil(number);
}
roundToLargestInteger(5.1);
roundToLargestInteger(-5.9);

// Returns the value of a number rounded to the nearest integer.

function roundToNearestInteger(number) {
  return Math.round(number);
}
roundToNearestInteger(5.5);
roundToNearestInteger(5.4);
roundToNearestInteger(-5.5);

// Returns the integer part of a number by removing any fractional digits.

function getIntegerPartNumber(number) {
  return Math.trunc(number);
}
getIntegerPartNumber(5.5);
getIntegerPartNumber(5.4);
getIntegerPartNumber(-5.5);

/**
 * Returns the sum of numbers.
 *
 * @param {number} x1
 * @param {number} x2
 * @param {number} x3
 * @returns {number}
 *
 * @example:
 * 1, 2, 3       => 6
 * 0.1, 0.2, 0.3 => 0.6
 */
function getSumOfNumbers(/* x1, x2, x3 */) {
  throw new Error('Not implemented');
}

// Returns the largest number.
function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}
getMaxNumber(1, 2);
getMaxNumber(-5, -6);
getMaxNumber(0, 5);

/**
 * Returns a random integer in the range from min to max.
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 *
 * @example:
 * 1, 2  => 1 | 2
 * -5, 0 => -5 | -4 | -3 | -2 | -1 | 0
 * -1, 1 => -1 | 0 | 1
 */
function getRandomInteger(/* min, max */) {
  throw new Error('Not implemented');
}

// Returns the length of the hypotenuse of a right triangle.

function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}
getHypotenuse(3, 4);

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
