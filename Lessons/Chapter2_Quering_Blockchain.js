const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const main = async () => {
    // some common methods for getting information form blockchain

    //to get block number:
    const block = await provider.getBlockNumber();
    console.log("This block number is: ", block);

    //to get block information like nonce, block number, etc.
    const blockInfo = await provider.getBlock(block)
    console.log("all the block information is here",blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block)

    console.log(`\nLogging first transaction in block:\n`)
    console.log(transactions[0])
}

main()

