require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/965bc447c1c84a51876b76ee4db6fbe1",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
