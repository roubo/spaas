const symbols = require("log-symbols");
const chalk = require("chalk");

/**
 * 错误信息 ❌
 * @param content
 */
const logError = content => {
  console.log(symbols.error, chalk.red(content));
};

const logWarn = content => {
  console.log(symbols.warning, chalk.red(content));
};

const logFun = content => {
  console.log(symbols.success, chalk.green(content));
};

const LogOut = {
  logError,
  logWarn,
  logFun
};

module.exports = LogOut;
