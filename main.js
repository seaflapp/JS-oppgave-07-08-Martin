// Functions and Conditionals assignment
// Read the assignment text CAREFULLY

/*
1.

Write a function that takes in a number as a parameter and returns
"Odd" if the number received is an odd number and "Even" if the number
received is even. Use arrow function syntax.

Console log the function call a few times with both even and odd numbers to
show that it's working.
*/
//! code here
let num1 = 10;
let num2 =9
let result;

function evenOdd() {
if (num1 % 2 === 0) {
  return (result = `${num1} tallet er odd`);
} else {
  return (result = `${num1} tallet er even`);
}
}

console.log(evenOdd())

function oddEven() {
if (num2 % 2 === 0) {
  return (result = `${num2} tallet er odd`);
} else {
  return (result = `${num2} tallet er even`);
}
}

console.log(oddEven())
/*
  2.
 
  Make a variable called userTitle and set the content equal to "Mr." if userMale is true,
  or to "Mrs." if userMale is false. Use the TERNARY conditional to do this:
 
  const variable = statement ? "this if true" : "this if not true"
 
  Try changing userMale to both true and false and console.log your new variable,
  to see that your conditional is working.
  */
//! code here

// function usertitle() {
//   return 
// }

function Title1() {
  const userTitle = true ? console.log("Mr.") : console.log("Mrs.")
}
function Title2() {
  const userTitle = false ? console.log("Mr.") : console.log("Mrs.")
}

Title1()
/*



  3.
 
  Write a function that takes in 2 parameters:
 
   - A name (string)
   - An hour of the day (number)
 
  The function should return:
  "Good night (name received)" if the hour received is 0-6
  "Good morning (name received)" if the hour received is 6-12
  "Good day (name received)" if the hour received is 12-18
  "Good evening (name received)" if the hour received is 18-24
  "Invalid time" if the hour received is greater than 24
 
  Use whichever function syntax you want.
  Use template literal in your return: `This is a template literal ${variable}`
 
  Example console.log(yourFunction("Gunnar", 19)) should console log Good evening Gunnar
  Console log the function a few times to show that it's working.
  */

//! code here
function timeOfday(Name, hour) {
  return (hour < 0 || hour > 24) ? `Invalid time`
    : (hour < 6) ? `Good night ${Name}`
    : (hour < 12) ? `Good morning ${Name}`
    : (hour < 18) ? `Good day ${Name}`
    : `Good evening ${Name}` 
}

console.log(timeOfday("Alice", 3 ))
console.log(timeOfday("Bob", 10 ))
console.log(timeOfday("Charlie", 14 ))
console.log(timeOfday("David", 20 ))
console.log(timeOfday("Eve", 25 ))

// function greetByTime(hour, name) {
//   if (hour < 0 || hour > 24) {
//       return "Invalid time";
//   } else if (hour < 6) {
//       return "Good night " + name;
//   } else if (hour < 12) {
//       return "Good morning " + name;
//   } else if (hour < 18) {
//       return "Good day " + name;
//   } else {
//       return "Good evening " + name;
//   }
// }
/*
 

  4.
 
  Write a function that takes in 2 numbers as parameters.
 
  In your function, check which of the numbers received is the largest,
  then return the sum of the largest number divided by the smaller.
 
  Use arrow function syntax.
 
  Example: your function receives 13 and 24, it should return the sum of 24/13
 
  */

//! code here
const calculateDivisionSum = (num1, num2) => {
  const largest = Math.max(num1, num2);
  const smallest = Math.min(num1, num2);
  
  // Avoid division by zero
  if (smallest === 0) {
      return "Cannot divide by zero";
  }
  
  return (largest + smallest) / smallest;
};

console.log(calculateDivisionSum(40,5))
/*



  5.
 
  Write an IF/ELSE conditional statement that checks whether username is empty,
  that the user age is 18+, and that userIsBlocked is false.
 
  (HINT: Use the && (logical AND) to check several things in one IF statement)
 
  If all of these conditions are true, change the userIsLoggedIn variable to true and
  and the goToPage variable to "/home" then console.log a welcome message.
 
  If any of the conditions for logging in are not met, console.log an error message.
 
  Try changing the values of the variables to make sure your IF/ELSE conditional
  can handle all cases correctly
  */

//! code here
function Login(username, age, boolean) {
  let userIsloggedIn = false;
  let userIsBlocked = false;
  let goTopage;

  if (username !== "" && age >= 18 && boolean === false) {
    userIsloggedIn =true
    goTopage = "/home"
    console.log(`Welcome back ${username}`)
} else if (boolean === true ) {
    console.log(`${username} is blocked. contact usersupport for help`)
  } else if (age < 18 ) {
    console.log(`${username} is not old enough.`)
  } else if (username === "" ) {
    console.log(`${username} need to fill in username`)
  }
}

Login("admin", 20, false)
Login("bob er best", 22, true)
Login("superkulgutt", 12, false)
Login("", 20, false)


/*



  6.
 
  EXTRA CHALLENGE
 
  This is not mandatory, only for those who want an extra challenge.
 
  Make a function called coolMaker that takes in 1 parameter.
 
  If the parameter received is a string:
  Return the string with "😎" added to the beginning and end
 
  If the parameter received is a number:
  Double it, convert it to a string and return it with "😎" added to the beginning and end.
 
  If the parameter received is a boolean:
  If the parameter received is true, return "😎Yeah😎". If the parameter received is false,
  return "😎Chill😎"
 
  If the parameter received is any other datatype:
  Return "😎Primitive values only😎"
 
  Use arrow function syntax.
 
  Console log the function call with a few different datatypes to show that it's working
  */

//! code here

/*
  7.
 
  EXTRA CHALLENGE
 
  fix dette så man får ut: the number 9 was found!
   tips: legg det i en funksjon og lag en konsoll log som kjøres når loopen er ferdig
  */

let randomNum = Math.ceil(Math.random() * 10); // expected output: 1-10

let x = 1;

//! change the code below
//    while (x != randomNum) {
//      console.log("trying to find the number.. " + x)
//      if (x === 9) break;
//      x++
//    }

/*
   8.
  
   EXTRA CHALLENGE
  
    lag while loopen over til en fungerende for loop:
    */

//! code here
