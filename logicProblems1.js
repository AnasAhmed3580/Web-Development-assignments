// 1. Sum of Two Numbers
// Write a function sum(a, b) that takes two numbers as arguments and returns their
// sum.
// Example: sum(3, 4) should return 7.
function sum(a, b) {
    return a + b;
  }
  let result = sum(3, 4);
  console.log(result); 

//   2. Check Even or Odd
// Write a function isEven(n) that returns true if the number n is even, and false if it's
// odd.
// Example: isEven(5) should return false.
function isEven(n) {
    return n % 2 === 0;
  }
  let isNumberEven = isEven(5);
  console.log(isNumberEven); 

//   3. Maximum of Three Numbers
// Write a function maxOfThree(a, b, c) that takes three numbers and returns the
// largest of the three.
// Example: maxOfThree(5, 8, 3) should return 8.
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
  }
  let largestNumber = maxOfThree(5, 8, 3);
  console.log(largestNumber); 

//   4. Reverse an Array
// Write a function reverseArray(arr) that takes an array and returns a new array with
// the elements in reverse order.
// Example: reverseArray([1, 2, 3]) should return [3, 2, 1].
function reverseArray(arr) {
    return arr.reverse();
  }
  let reversedArray = reverseArray([1, 2, 3]);
  console.log(reversedArray);

//   5. Factorial of a Number
// Write a function factorial(n) that takes a non-negative integer n and returns its
// factorial.
// Example: factorial(5) should return 120.
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  let factorialOf5 = factorial(5);
  console.log(factorialOf5); 

//   6. Count Vowels in a String
// Write a function countVowels(str) that takes a string and returns the number of
// vowels (a, e, i, o, u) in it.
// Example: countVowels('hello world') should return 3.
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  let vowelCount = countVowels('hello world');
  console.log(vowelCount); 

//   7. Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that takes an array and returns a new array
// with duplicates removed.
// Example: removeDuplicates([1, 2, 2, 3, 4, 4]) should return [1, 2, 3, 4].
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  let uniqueArray = removeDuplicates([1, 2, 2, 3, 4, 4]);
  console.log(uniqueArray); 

//   8. Sum of Array Elements
// Write a function sumArray(arr) that takes an array of numbers and returns the sum
// of all the elements.
// Example: sumArray([1, 2, 3, 4]) should return 10.
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
  let arraySum = sumArray([1, 2, 3, 4]);
console.log(arraySum); 

// 9. Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(c) that converts Celsius to Fahrenheit using the
// formula F = C * 9/5 + 32.
// Example: celsiusToFahrenheit(0) should return 32.
function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
  }
  let fahrenheit = celsiusToFahrenheit(0);
  console.log(fahrenheit);

//   10. Check if a Number is Prime
// Write a function isPrime(n) that returns true if n is a prime number and false otherwise.
// Example: isPrime(7) should return true.
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    if (n <= 3) {
      return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }
  
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  let isNumberPrime = isPrime(7);
  console.log(isNumberPrime);
