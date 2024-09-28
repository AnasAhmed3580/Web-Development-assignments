// 1. Object Property Access
// • Question: Create an object named car with properties make, model, and year. How would
// you access and print the model of the car?
// Create the car object
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2023
  };
  console.log(car.model);

//   2. Array Iteration
// • Question: Given an array of numbers, write a for loop that prints each number in the array
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
  console.log(number);
});

// 3. Array Sum Function
// • Question: Write a function that takes an array of numbers as an argument and returns the
// sum of all elements in the array.
function sumArray(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
const numbers = [1, 2, 3, 4, 5];
const total = sumArray(numbers);
console.log(total); 

// 4. Date Manipulation
// • Question: How would you create a new Date object in JavaScript and extract the current year
// from it?
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

console.log(currentYear); 

// 5. If-Else Statement
// • Question: Write a function that takes a number as an argument and returns "Positive" if the
// number is greater than 0, "Negative" if the number is less than 0, and "Zero" if the number is
// 0.
function checkNumber(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
const result = checkNumber(5);
console.log(result); 

// 6. While Loop
// • Question: Write a while loop that prints numbers from 1 to 5.
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// 7. Math Operations
// • Question: Write a function that calculates the square root of a number using JavaScript's
// Math object.
function calculateSquareRoot(number) {
  return Math.sqrt(number);
}
const solution = calculateSquareRoot(16);
console.log(solution); 

// 8. Array Filtering
// • Question: Write a function that takes an array of numbers and returns a new array
// containing only the even numbers.
function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); 

// 9. Function with Default Parameters
// • Question: Create a function that multiplies two numbers. If the second number is not
// provided, it should default to 10.
function multiply(a, b = 10) {
  return a * b;
}
console.log(multiply(5)); 
console.log(multiply(3, 4)); 

// 10. Object Methods
// • Question: Create an object calculator with methods add, subtract, multiply, and divide. Each
// method should take two numbers as arguments and return the result of the corresponding
// operation.
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(8, 2)); // Output: 6
console.log(calculator.multiply(4, 3)); // Output: 12
console.log(calculator.divide(10, 2)); // Output: 5

// 11. Nested If-Else
// • Question: Write a function that checks a student's grade and returns "A" for marks above 90,
// "B" for marks between 80 and 90, "C" for marks between 70 and 80, and "F" for marks below
// 70.
function checkGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 80) {
    return "B";
  } else if (marks >= 70) {
    return "C";
  } else {
    return "F";
  }
}
const grade = checkGrade(85);
console.log(grade); 

// 12. Array Length
// • Question: How do you find the length of an array in JavaScript?
const myArray = [1, 2, 3, 4, 5];
const arrayLength = myArray.length;

console.log(arrayLength);

// 13. For Loop with Break
// • Question: Write a for loop that iterates through an array of numbers and breaks the loop
// when it encounters the number 5.
const numbers = [1, 2, 3, 5, 4, 6, 7];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    break; // Terminate the loop
  }
  console.log(numbers[i]);
}

// 14. Date Comparison
// • Question: Write a function that takes two dates as arguments and returns true if the first
// date is earlier than the second date.
function isDateEarlier(date1, date2) {
  return date1 < date2;
}
const date1 = new Date("2024-01-01");
const date2 = new Date("2024-02-01");

const isEarlier = isDateEarlier(date1, date2);
console.log(isEarlier); 

// 15. Switch Statement
// • Question: Write a switch statement that takes a day of the week (1 for Monday, 2 for
// Tuesday, etc.) and returns the name of the day.
function getDayName(day) {
  let dayName;

  switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Invalid day";
  }

  return dayName;
}
console.log(getDayName(1)); // Output: "Monday"
console.log(getDayName(5)); // Output: "Friday"
console.log(getDayName(8)); // Output: "Invalid day"
