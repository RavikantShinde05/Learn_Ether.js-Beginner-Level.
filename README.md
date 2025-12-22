# Learn_Ether.js-Beginner-Level.
This repo will explain you what is Ether.js library and it also contains some scripting which will explain how we can interact (Read/ Write) with the blockchain and Smart Contract.

# Ethers.js Library 🚀

## 📌 What is Ethers.js?

**Ethers.js** is a lightweight JavaScript library used to interact with the **Ethereum blockchain network** and other EVM-compatible blockchains.

It allows developers to:
- Connect to Ethereum nodes or test networks and API Providers.
- Read data from the blockchain
- Send transactions
- Interact with smart contracts
- Manage wallets and private keys securely

Ethers.js is commonly used in **Web3**, **dApps**, and **blockchain development**.

---

## ✨ Features

- Easy to use and well documented
- Lightweight compared to other Web3 libraries
- Secure wallet and key management
- Supports smart contract interaction
- Works in both **Node.js** and **browser environments**
- Also easy for debugging and testing Smart Contracts

---

## 📦 Installation

You can install **ethers.js** using **npm** or **yarn**.

### Using npm
```bash
npm install --save ethers
```
## Importing the Library:
1. importing for node.js:
```
const { ethers } = require("ethers");
```
2. Imporing for Typescript or ES6:
```
import { ethers } from "ethers";
```

## It is always better to always refer the Documentation of ethers.js as i have referred as below:

## Basic terms which are mostly used while Scripting:

### Provider :	
A Provider (in ethers) is a class which provides an abstraction for a connection to the Ethereum Network. It provides read-only access to the Blockchain and its status.	 
### Signer :	
A Signer is a class which (usually) in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to charge your account ether to perform operations.	 
### Contract :	
A Contract is an abstraction which represents a connection to a specific contract on the Ethereum Network, so that applications can use it like a normal JavaScript object.

## Connecting to the Metamask :

```
const provider = new ethers.providers.Web3Provider(window.ethereum);

await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner();
```

## Connecting to the Ethereum Network with (RPC):

```
const provider = new ethers.providers.JsonRpcProvider();

const signer = provider.getSigner();
```
