const chalk = require("chalk");

/**
 * 显示列表信息
 * @param content
 */
const messageOutList = content => {
  let header = "------------------------------------\n";
  let titles = content.title + "\n";
  let footer = "------------------------------------\n-> ";
  let res = chalk.blue(titles) + header;
  content.list.map(item => {
    res = res + item + "\n";
  });
  res = res + footer;
  return res;
};

const MessageOut = {
  messageOutList
};

module.exports = MessageOut;
