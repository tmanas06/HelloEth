require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Cry15js52ZxJMvhFvQQF3Zpo6tVBC7Lg",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
