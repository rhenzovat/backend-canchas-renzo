"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(chalk_1.default.green('I am a green line ' +
    chalk_1.default.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'));
console.log(figlet_1.default.textSync("renzo"));
console.log(chalk_1.default.green.bgRed.bold(figlet_1.default.textSync("renzo")));
console.log(process.env.S3_BUCKET);
console.log(process.env.MI_VARIABLE);
//# sourceMappingURL=app.js.map