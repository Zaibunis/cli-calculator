#!/usr/bin/env node
import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter first number : ", type: "number", name: "firstNumber" },
  { message: "Enter second number : ", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation : ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//conditional statements:
if (asnwer.operator === "Addition") {
    console.log("Your Answer is: ",asnwer.firstNumber + asnwer.secondNumber);
}else if (asnwer.operator === "Subtraction") {
    console.log("Your Answer is: ",asnwer.firstNumber - asnwer.secondNumber);
}else if (asnwer.operator === "Multiplication") {
    console.log("Your Answer is: ",asnwer.firstNumber * asnwer.secondNumber);
}else if (asnwer.operator === "Division") {
    console.log("Your Answer is: ",asnwer.firstNumber / asnwer.secondNumber);
}else {
    console.log("Please select a valid operator !");
}

