import inquirer from "inquirer";

interface ansType {
  userId: string;
  userPin: number;
  accountType: string;
  transactionType: string;
  amount: number;
}

const answers = await inquirer.prompt([
  {
    type: "input",
    name: "userId",
    message: "Kindly Enter Your Id: ",
  },
  {
    type: "number",
    name: "userPin",
    message: "Kindly Enter Your pin: ",
  },
  {
    type: "list",
    name: "accountType",
    choices: ["Current", "Saving"],
    message: "Please Enter Your Account Type: ",
  },
  {
    type: "list",
    name: "transactionType",
    choices: ["Fast Cash", "Withdrawl"],
    message: "Please Enter Your Transaction Type: ",
    when(answers) {
      return answers.accountType === "Current";
    },
  },
  {
    type: "list",
    name: "amount",
    choices: [1000, 2000, 5000, 10000, 20000, 50000],
    message: "Please Select Your Amount",
    when(answers) {
      return answers.transactionType === "Fast Cash";
    },
  },
  {
    type: "list",
    name: "amount",
    choices: [1000, 2000, 5000, 10000, 20000, 50000],
    message: "Please Select Your Withdrawl Amount",
    when(answers) {
      return answers.transactionType === "Withdrawl";
    },
  },
]);

if (answers.userId && answers.userPin) {
  const balance = Math.floor(Math.random() * 100000);
  console.log(`Current Balance: ${balance}`);
  const enteredAmount = answers.amount;
  if (balance < enteredAmount) {
    console.log("Insuficiant Balance");
  } else {
    const remaining = balance - enteredAmount;
    console.log(`Your remaining balance is: ${remaining}`);
   
  }
}
