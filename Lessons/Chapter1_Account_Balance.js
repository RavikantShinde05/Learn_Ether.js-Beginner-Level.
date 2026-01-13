const { ethers } = require("ethers");

const INFURA_ID = ''// keep this in api key in .env file

// first get provider to read the data 
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`) 

const address = '' // random address from etherscan.io

const main = async () => {
    const balance = await provider.getBalance(address); // getbalance is a method
    console.log("this is the balance in BigNumber", balance);

    // to convert the balance into eth use this 
    const balance_Eth = ethers.utils.formatEther(balance);
    console.log("this balance is in the form of Eth", balance_Eth);
}

main()

