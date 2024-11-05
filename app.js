

//STRING METHODS
//Assignment # 21-25
//q1
    // Prompt the user for their first name
var firstName = prompt("Please enter your first name:");

// Prompt the user for their last name
var lastName = prompt("Please enter your last name:");

// Merge first and last names into fullName
var fullName = firstName + " " + lastName;

// Greet the user
alert("Hello, " + fullName + 
" ! Welcome!");

//q2
// Prompt the user for their favorite mobile phone model
var favoriteModel = prompt("Please enter your favorite mobile phone model:");
console.log(favoriteModel)
// Find the length of the input
var inputLength = favoriteModel.length;

// Display the length in the browser
console.log("The length of your input is: " + inputLength);

//q3
// Define the word
var word = "Pakistani";
console.log(word)
// Find the index of the letter "n"
var index = word.indexOf("n");

// Display the result in the browser
console.log("The index of 'n' in the word 'Pakistani' is: " + index);

//q4
var word = "Hello World";
console.log(word)
// Find the index of the letter "n"
var index = word.lastIndexOf("l");

// Display the result in the browser
console.log("The index of 'l' in the word 'Hello World' is: " + index);
//q5
// Define the word
var word = "Pakistani";

// Find the character at the 3rd index
var character = word.charAt(3);

// Display the result in the browser
console.log("The character at the 3rd index in the word 'Pakistani' is: " + character);

//q7
// Define the word
var city = "Hyderabad";

// Replace "Hyder" with "Islam"
var newCity = city.replace("Hyder", "Islam");

// Display the result in the browser
console.log("The new city name is: " + newCity);
//q8

// Define the message
var message = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&"
var newMessage = message.replace(/and/g, "&");

// Display the result in the browser
console.log("Updated message: " + newMessage);
//q9
// Original string value
let strValue = "472";
// Convert string to number
let numValue = Number(strValue);

// Display values and types in the console
console.log("String Value:", strValue, "(Type:", typeof strValue + ")");
console.log("Number Value:", numValue, "(Type:", typeof numValue + ")");

//q10

// i am not using

//q11
// Original number
var num = 35.36;

// Convert number to string and remove the dot
var strNum = num.toString().replace('.', '');

// Display the result in the console
console.log("Converted Value:", strNum);
//q12
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
var a = prompt("Enter an item to search:")
var b =a.toLowerCase()
if(b=="cake"||b=="apple"||b=="cookie"||b=="chips"||b=="patties"){
    alert(b+ " is available in the list.")
}
else{
    alert(b + " is not found in the list.")
}
//q17
// Prompt the user for input
var userInput = prompt("Enter some text:");

// Check if the input is not empty
if (userInput.length > 0) {
  // Get the last character
  let lastCharacter = userInput.charAt(userInput.length - 1);
  alert("The last character is: " + lastCharacter);
} else {
  alert("No input provided.");
}

//q18
//------------------?------------------------//
//--------------------------MATH METHODS-------------------//
//q1
var int = prompt("Give me a number of integer: ")
console.log("Round of value "+Math.round(int))
console.log("Floor of value "+Math.floor(int))
console.log("Ceil value "+Math.ceil(int))
//q2
var int = prompt("Give me a number of negative num: ")
console.log("Round of value "+Math.round(int))
console.log("Floor of value "+Math.floor(int))
console.log("Ceil value "+Math.ceil(int))

//q3
// Prompt the user to enter a number
var userInput = prompt("Enter a number:");

// Convert input to a number
var number = Number(userInput);

// Calculate the absolute value
var absoluteValue = Math.abs(number);

// Display the absolute value
alert("The absolute value of " + number + " is " + absoluteValue);
//q4

//q5
var ran = prompt("'Guess number b/w 1 to 2'")
if(ran=="1"){
    console.log("Random coin value is Tail")
}
if(ran=="2"){
    console.log("Random coin value is Heads")
}
else{
    console.log("You enter valid number you try again !")
}
//q6
//-------------------------?----------------------//
//q7
//---seven is wrong

//q8
var ran = Math.round(Math.random()*10) // 7
for(var i=0; i<5; i++){ 
    var guess = prompt('Guess number b/w 0 to 10') // 6
    if(guess == ran-2 || guess == ran-1){
        alert('You are too close')
    }
    else if(guess == ran){
        alert('Your guess is true')
        break
    }
    else{
        alert('Try again!')
    }
}
//-------------------------------DATE METHODS-----------------------------//
//q1
var rightNow = new Date();
console.log(rightNow)
//q2
var b =new Date()
var currentMonth = b.getMonth();

// Display the current month name in an alert
console.log(currentMonth);
//q3
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = new Date().getDay();
console.log(days[currentDay]);

//q4
var days = prompt("Give the day name: ")
var day = days.toLowerCase()
if(day=="sunday" ||day=="sun"||day=="sat"||day=="saturday"){
    alert("It's Fun day")
}else{
    alert("It's normal day")
}

//------------FUNCTION--------------------------//
//q1
function displayDateTime() {
    var currentDateTime = new Date();
    console.log("Current Date and Time: " + currentDateTime);
}

// Call the function
displayDateTime();
//q2
var firstName= "Fuzail";
var lastName="Raza"
function greetUser(firstName, lastName) {
    var fullName = firstName +lastName;
    console.log("Hello, " + fullName + "!");
}greetUser(firstName, lastName)


//q3
var num1 =parseFloat(prompt("Enter a First number"))
var num2 =parseFloat(prompt("Enter a Second number"))
function user (num1,num2){
    return num1+num2
    
}
console.log(num1+num2)
//q4
var num1 = parseFloat(prompt("Enter a First number"))
var num3 = prompt("Enter a sign *-+/")
var num2 = parseFloat(prompt("Enter a Second number"))



function calculator(num1,num2,num3){
    if(num3==="-"){
        console.log(num1-num2)
    }
 else if(num3==="+"){
        console.log(num1+num2)
    }
   else if(num3==="*"){
        console.log(num1*num2)
    }
    else if(num3==="/"){
        console.log(num1/num2)
    }
    else{
        alert("Enter a valid number")
    }

}
calculator(num1,num2,num3)
//q5















//q7-14
// ths question are very hard i not attend  this question 

//--------------------------DATE METHODS-----------------------------//
//q1
var date = new Date();
console.log(date)
//q2
var now = new Date();
var monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var currentMonth = monthNames[now.getMonth()];
console.log("Current month is: " + currentMonth);
//q3
var now = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = dayNames[now.getDay()];
console.log("Today is: " + currentDay);
//q5
var now = new Date();
var currentDate = now.getDate();

if (currentDate < 16) {
  console.log("First fifteen days of the month");
} else {
  console.log("Last days of the month");
}
//q6
var date = new Date();  // Create a Date object representing the current date and time
minutesSinceEpoch = Math.floor(date.getTime() / 1000);  // Calculate minutes since January 1, 1970

console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch);
//q7

var now = new Date();
var hours = now.getHours();

if (hours < 12) {
  console.log("It's AM");
} else {
  console.log("It's PM");
}
//q8
var laterDate = new Date(2020, 11, 31); // December is month 11 (0-indexed)
    console.log("The last day of the last month of 2020 is: " + laterDate);
//q9
function updateCountdown() {
    // Set the start date for Ramadan in 2025 (e.g., March 1, 2025)
    const ramadanStart2025 = new Date(2025, 3); // March 1, 2025 (Months are 0-indexed)
    const now = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = ramadanStart2025 - now;

    // Calculate months, days, hours, minutes, and seconds remaining
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown
    const countdownDisplay = document.getElementById("countdown");
    if (timeDifference > 0) {
      countdownDisplay.textContent = `${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining until Ramadan 2025.`;
    } else {
      countdownDisplay.textContent = "Ramadan 2025 has already started!";
    }
  }

  // Update the countdown every second
  setInterval(updateCountdown, 1000);
//q11
var currentDate = new Date();

// Extract the hours
var currentHours = currentDate.getHours();
console.log("Current Hours: " + currentHours); // Optional: Log to console
//q12
var currentDate = new Date();

    // Reset the date to 100 years back
    currentDate.setFullYear(currentDate.getFullYear() - 100);

    // Alert the updated date
    console.log("Date 100 years back: " + currentDate.toDateString());
//q13
var customerName = "John Doe";
    var currentMonth = new Date().toLocaleString('default', { month: 'long' });
    var numberOfUnits = 350; // Example units consumed
    var chargesPerUnit = 15.00; // Example charges per unit in PKR

    // Calculating amounts
    var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
    var latePaymentSurcharge = 50.00; // Fixed late payment surcharge
    var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
console.log(grossAmountPayable)

 


















