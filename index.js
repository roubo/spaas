#!/usr/bin/env node

/**
 * SPAAS
 * @notice: SPAAS 工具集总入口，分发最外层命令行参数
 * @author: Roubo
 * create on: 2019-12-21 20:34
 **/

const program = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const symbols = require("log-symbols");
const ubuntuDockerInstall = require("./src/ubunut-docker-install/index");
const MessageOut = require("./src/utils/MessageOut");

const Main = () => {
  program
    .description("【SPAAS】Self-Platform-as-a-Service CLI")
    .version("1.0.0", "-v, --version")
    .command("init")
    .action(name => {
      inquirer
        .prompt([
          {
            name: "index",
            message: MessageOut.messageOutList({
              title: "选择项目",
              list: [
                "[0] Ubuntu-Docker-Install",
                "[1] Ubuntu-Mysql-Install",
                "[2] Ubuntu-Mongodb-Install"
              ]
            })
          }
        ])
        .then(answers => {
          if (["0", "1", "2"].indexOf(answers.index) === -1) {
            console.log(symbols.error, chalk.red("选择项目出错 !!"));
          }
          switch (answers.index) {
            case "0":
              ubuntuDockerInstall.entry();
              break;
            case "1":
              ubuntuDockerInstall.entry();
              break;
            case "2":
              ubuntuDockerInstall.entry();
              break;
            default:
              break;
          }
        });

    });
  program.parse(process.argv);
};

const spaas = {
  Main
};

module.exports = spaas;
