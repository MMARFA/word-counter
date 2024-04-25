#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellowBright("\n\t\tArfat Asif - word counter"));
console.log("=".repeat(50));

let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);

let word = answers.sentence.trim().split(" ");
console.log("=".repeat(50));
console.log(chalk.bold("-sentence words:"));
console.log(word);
console.log(chalk.bold(`\n - word count: ${chalk.bold.blue(word.length)}`));
console.log("=".repeat(50));


