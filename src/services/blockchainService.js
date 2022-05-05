import { Blockchain } from "../classes/blockchainClasses";
const EC = require("elliptic").ec;
export class BlockchainService {
  static blockchainInstance = new Blockchain();
  static walletKeys = [];
  constructor() {
    //this.blockchainInstance.blockchainInstance = [];
    //this.blockchainInstance.walletKeys = [];
    //this.blockchainInstance.difficulty = 1;
    //this.blockchainInstance.minePendingTransactions("hi");
    //this.generateWalletKeys();
  }

  static minePendingTransactions(address) {
    this.blockchainInstance.minePendingTransactions(
      this.findWalletByAddress(address).publicKey
    );
  }

  addressIsFromCurrentUser(address, index) {
    return address === this.walletKeys[index].publicKey;
  }

  static generateWalletKeys(name) {
    const found = this.walletKeys.find((wallet) => wallet.name === name);
    if (!found) {
      const ec = EC("secp256k1");
      const key = ec.genKeyPair();

      this.walletKeys.push({
        name: name,
        keyObj: key,
        publicKey: key.getPublic("hex"),
        privateKey: key.getPrivate("hex"),
      });
      console.log(this.walletKeys);
      return key.getPublic("hex");
    }
    return found.publicKey;
  }

  static getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions;
  }

  static addTransaction(tx) {
    this.blockchainInstance.addTransaction(tx);
  }

  static getBlocks() {
    return this.blockchainInstance;
  }

  static getBalanceOfAddress(address) {
    return this.blockchainInstance.getBalanceOfAddress(address);
  }
  static getBlockByIndex(i) {
    return this.blockchainInstance.chain[i];
  }
  static getAllTransactionsForWallet(address) {
    return this.blockchainInstance.getAllTransactionsForWallet(address);
  }
  static findWalletByAddress(address) {
    const found = this.walletKeys.find(
      (wallet) => wallet.publicKey === address
    );
    if (found) return found;
    throw Error("Receiver's address doesn't exist.");
  }
}
