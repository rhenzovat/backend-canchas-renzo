import chalk from 'chalk';
import figlet from "figlet";
import dotenv from 'dotenv'
dotenv.config();

console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

console.log(figlet.textSync("renzo")
);

console.log(chalk.green.bgRed.bold(figlet.textSync("renzo"))
);

console.log(process.env.S3_BUCKET);
console.log(process.env.MI_VARIABLE);