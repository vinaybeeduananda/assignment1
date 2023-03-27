// ------------------asignment level 1----------------------------

// 1.	Get user input using prompt (“Enter your age:”). If user is 18 or older, give feedback: ‘You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years, he needs to turn 18.

let age = prompt('Enter your age')
if (age >= 18){
    console.log('You are old enough to drive')
}
else {
    less = 18 - age;
    console.log('You are left with '+ less + '  years to drive')
}

// 2.	Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let yourAge = prompt('Enter your age')
// let myAge = prompt('Enter my age')
let myAge = 30;
if (yourAge > myAge){
     diff = yourAge - myAge;
    console.log('You are ' + diff + 'years older than me')
}
else if(myAge > yourAge){
    let diff1 = myAge - yourAge;
    console.log('You are ' + diff1 +'years younger than me')
}
else console.log('we both are same years old')

// 3.	If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// ---	using if else ---
let a = 15;
let b = 17;
if (a>b)
    console.log('a is greater than b')
else if (a<b)
    console.log('b is greater than a')
else
    console.log('a is equal to b')

    //---- using switch statement
    let m = 25;
    let n = 25;
    switch (m>n){
    case true:
     console.log('m is greater than n')
     break;
     case false:
     console.log('n is greater than m')
     break;
    }


//---- using ternary operator
const x = 37;
const y = 35;
const result = x > y ? 'x is greater than y': 'y is greater than x';
console.log(result);

// 4.	Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = 3125;
if (num % 2 == 0) {
  console.log(num +  'is an even number');
} else {
  console.log(num + " is an odd number");
}

// ---------------assignment level 2-----------------------------------

// 5.	Write a code which can give grades to students according to their scores:
// o	80-100, A
// o	70-89, B
// o	60-69, C
// o	50-59, D
// o	0-49, F

function getGrade(score) {
    if (score >= 80 && score <= 100) {
      console.log('A');
    } else if (score >= 70 && score <= 89) {
      return 'B';
    } else if (score >= 60 && score <= 69) {
      return 'C';
    } else if (score >= 50 && score <= 59) {
      return 'D';
    } else if (score >= 0 && score <= 49) {
      return 'F';
    } else {
      return 'Invalid score';
    }
}
console.log(getGrade(75));

  
// 6.	Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// o	September, October or November, the season is Autumn.
// o	December, January or February, the season is Winter.
// o	March, April or May, the season is Spring
// o	June, July or August, the season is Summer

let month1 = 'september';
if (month1 ==='september'|| month1 ==='october'|| month1 === 'november'){
  console.log('the season is Autumn')
}
else if(month1 ==='december'||month1 ==='january'||month1 ==='february'){
  console.log('the season is Winter')
}
else if(month1 ==='march'||month1 ==='april'||month1 ==='may'){
  console.log('the season is Spring')
}
else {
  console.log('the season is summer')
}



// 7.	Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day today? Saturday
//     Saturday is a weekend.
//     What is the day today? Friday
//     Friday is a working day.

const today = 'monday' ;


if (today === "Saturday" || today === "Sunday") {
  console.log("It's the weekend!");

}else {
    console.log(today)
    console.log("It's working day")
}




//8. Write a program which tells the number of days in a month, now consider leap year.

function daysInMonth(month, year) {
  // January is 0, February is 1, etc.
  const monthIndex = month - 1;
  const daysInMonths = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return daysInMonths[monthIndex];
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
let month =2;
let year = 2023;
console.log(daysInMonth(month,year)); 
if (isLeapYear(year)) {
  console.log(`${year} is a leap year!`);
} else {
  console.log(`${year} is not a leap year.`);}
  
