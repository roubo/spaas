/**
 * Ubuntu Docker Install
 * @notice: 在Ubuntu 主机上统一方式安装 Docker 环境
 * @author: Roubo
 * create on: 2019-12-21
 **/
const os = require("os");
const path = require("path");
const LogOut = require("../utils/LogOut");
const { exec } = require("child_process");
const entry = () => {
  if (os.platform() !== "linux") {
    LogOut.logError("暂不支持当前系统 !!");
    return;
  }
  LogOut.logFun("-> ubuntu docker install ...");
  exec(
    "sudo sh ./install.sh --mirror Aliyun",
    { cwd: path.join(process.cwd(), "script") },
    (err, stdout, stderr) => {
      if (err) {
        LogOut.logError(err);
        return;
      }
      LogOut.logWarn(stderr);
      LogOut.logFun(stdout);
    }
  );
};

const ubuntuDockerInstall = {
  entry
};

module.exports = ubuntuDockerInstall;
