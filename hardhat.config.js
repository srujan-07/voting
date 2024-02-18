/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon: {
      url: "https://polygon-mumbai.infura.io/v3/46c46c2552174d9cb5d9a3db15ec55fb",
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 80001,
    },
  },
};