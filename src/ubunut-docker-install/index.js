/**
 * Ubuntu Docker Install
 * @notice: 在Ubuntu 主机上统一方式安装 Docker 环境
 * @author: Roubo
 * create on: 2019-12-21
 **/
const os = require("os");
const path = require("path");
const LogOut = require("../utils/LogOut");
const { exec, spawn } = require("child_process");
const entry = () => {
  if (os.platform() !== "linux") {
    LogOut.logError("暂不支持当前系统 !!");
    return;
  }
  LogOut.logFun("-> ubuntu docker install ...");
  let install = spawn("sudo ./install.sh --mirror Aliyun", {
    cwd: path.join(process.cwd(), "src/ubuntu-docker-install/script")
  });
  install.stdout.on("data", data => {
    LogOut.logInfo(data.toString());
  });
  install.stderr.on("data", data => {
    LogOut.logWarn(data.toString());
  });
  install.on("exit", code => {
    if (code === 0) {
      LogOut.logFun("-> success.");
    } else {
      LogOut.logError("-> success.");
    }
  });
};

const ubuntuDockerInstall = {
  entry
};

module.exports = ubuntuDockerInstall;
