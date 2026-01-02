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

## Connecting to the Ethereum Network (RPC):

```
const provider = new ethers.providers.JsonRpcProvider();

const signer = provider.getSigner();
```



## Chapter 1: Getting Started and Foundational Concepts
This chapter focuses on setting up the library and understanding the core terminology of the Ethereum ecosystem and the ethers.js library.
- Getting Started: Includes steps for Installing and Importing the library.
- Ethereum Basics: Covers Common Terminology, Events, Logs and Filtering, and Solidity Topics.
- Connecting to Ethereum: Details connecting via MetaMask and direct RPC connections.
- Security Features: Introduction to Security, including Side-Channel Attacks and Key Derivation Functions, emphasizing that the library is designed to keep your private keys safe in your client.
## Chapter 2: Network Operations and Resource Management:
This section dives into the practical aspects of interacting with the Ethereum network, focusing on transaction resources and best practices.
- Gas Management: Covers the concepts of Gas, Gas Price, and Gas Limit.
- Best Practices: Includes important considerations for handling Network Changes.
- Provider API Keys: Discusses how to use API providers such as Etherscan, INFURA, Alchemy, Pocket Gateway, and Ankr, and how to create a Default Provider.
## Chapter 3: Providers: Connecting and Retrieving Data:
This chapter focuses on the Application Programming Interface (API) related to Providers, which are essential for reading data from the blockchain.
- Provider Types: Detailed review of the main Provider class, JsonRpcProvider, and other specific API Providers like InfuraProvider, AlchemyProvider, and CloudflareProvider.
- Provider Methods: Explores methods covering Accounts, Blocks, Logs, Network Status, and Transactions.
- Advanced Providers: Examination of specialized options such as FallbackProvider, Web3Provider, and WebSocketProvider.
## Chapter 4: Signers and Identity Management:
This chapter covers the components responsible for sending transactions and managing cryptographic keys.
- Signers: Detailed coverage of the Signer type, including Wallet, VoidSigner, and ExternallyOwnedAccount.
- Key Management: Includes methods for importing and exporting JSON wallets (Geth, Parity) and working with BIP 39 mnemonic phrases and HD Wallets.
- Signing: Covers the process of Signing Messages.
## Chapter 5: Contract Interaction:
This critical chapter details how to define, deploy, and interact with smart contracts on the network.
- Contract Classes: Focus on the Contract and ContractFactory types.
- Instance Management: Covers Creating Instances, Properties, Methods, and Events for contracts.
- Meta-classes: Understanding how meta-classes create JavaScript objects from any contract ABI, supporting ABIv2 and Human-Readable ABI.
- Example Usage: Includes the Example: ERC-20 Contract section, illustrating deployment and connecting to contracts.
## Chapter 6: Utilities and Data Manipulation:
This expansive chapter covers the necessary tools for encoding, decoding, formatting, and mathematical operations.
- Application Binary Interface (ABI): In-depth look at AbiCoder, ABI Formats (Human-Readable ABI, Solidity JSON ABI), and Fragments (FunctionFragment, EventFragment).
- Data Types: Covers BigNumber manipulation, Byte Manipulation, and FixedNumber.
- Hashing and Addresses: Details Cryptographic Hash Functions, Solidity Hashing Algorithms, and Addresses (Formats, Conversion, Verification).
- Ethereum Naming Service (ENS): Explains how ENS names are treated as first-class citizens and can be used anywhere an Ethereum address is valid.
## Chapter 7: Advanced Development Topics:
This chapter covers specialized tools, integrations, and experimental features.
- Language Support: TypeScript preparation, including definition files and full TypeScript source.
- Other Libraries: Overview of Assembly and Ethers ASM Dialect.
- Hardware Integration: Includes documentation for hardware wallets like LedgerSigner.
- Command Line Interfaces: Use of the Sandbox Utility and Assembler tools.
## Chapter 8: Maintenance, Migration, and Resources:
This final section offers guidance on integrating the library into various environments and upgrading from previous versions.
- Cookbook: Practical examples, including specific instructions for React Native.
- Migration Guide: Details for moving from Web3.js and Ethers v4 to Ethers v5.
- Testing: Information on Test Suites and Supported Platforms.
