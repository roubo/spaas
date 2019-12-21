#!/usr/bin/env node

/**
 * SPAAS
 * @notice: SPAAS 工具集总入口，分发最外层命令行参数
 * @author: Roubo
 * create on: 2019-12-21 20:34
 **/

const program = require("commander");

const Main = () => {
  program
    .version("1.0.0", "-v, --version")
    .command("install <name>")
    .action(name => {});
  program.parse(process.argv);
};

const spaas = {
  Main
};

module.exports = spaas;
