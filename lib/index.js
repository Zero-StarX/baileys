"use strict";

const chalk = require("chalk");
console.log(chalk.cyanBright.bold("\n┏─────────────────────────────┓"));
console.log(chalk.cyanBright.bold("┃     🌸 Modified Baileys 🌸    ┃"));
console.log(chalk.cyanBright.bold("┃    crafted by Yuchiii Takumi ┃"));
console.log(chalk.cyanBright.bold("┗─────────────────────────────┛\n"));

console.log(chalk.whiteBright("💖 Halo~ Selamat datang di Baileys modifikasi!"));
console.log(chalk.whiteBright("   Aku harap kamu menyukai karya sederhana ini"));
console.log(chalk.whiteBright("   dan semoga membantu project bot kamu ya~\n"));

console.log(chalk.yellow("📬 Telegram: ") + chalk.greenBright("@yuchii_oz"));
console.log(chalk.blue("🌟 Jangan ragu untuk memberikan feedback"));
console.log(chalk.blue("   atau request fitur yang kamu butuhkan!\n"));

console.log(chalk.gray("─────────────────────────────────────\n"));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
