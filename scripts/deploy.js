
const hre = require("hardhat");

async function main() {
 const BoonToken = await hre.ethers.getContractFactory("BoonToken");
 const boonToken = await BoonToken.deploy(100000000, 50);
// await boonToken.deployed();
 await boonToken.waitForDeployment();

  console.log("Boon Token deployed: ", await boonToken.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
