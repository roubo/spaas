/**
 * Ubuntu Docker Install
 * @notice: 在Ubuntu 主机上统一方式安装 Docker 环境
 * @author: Roubo
 * create on: 2019-12-21
 **/
const os = require('os');
const entry = () => {
  console.log(os.type())
};

const ubuntuDockerInstall = {
  entry
};

module.exports = ubuntuDockerInstall;
