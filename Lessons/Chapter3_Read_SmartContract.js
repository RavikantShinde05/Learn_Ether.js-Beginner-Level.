import { ethers } from "ethers";

const address = '';// Dai Contract address
const Contract_ABI = [];
const provider = new ethers.providers.web3Provider(``);
// provider or signer
const contract = new ethers.Contract(address, Contract_ABI, provider); 


const main = async ()=> {

const token_name =  await contract.name();
const symBol = await contract.symbol();
const totalSupply = await contract.totalSupply();

console.log(address);
console.log(token_name);
console.log(symBol);
console.log(totalSupply);

const balance = await contract.balanceof('Random address');
console.log("this the balance of Random Address in BigNumber", balance);

// to change it into ethers use this
const balance_Eth = ethers.utils.formatEther(balance)
console.log("this is the balance in Eth", balance_Eth);

const weiBalanceconvert = ethers.utils.parseEther(balance_Eth)
console.log("this is again in wei or BigNumber",weiBalanceconvert);
}

main();
