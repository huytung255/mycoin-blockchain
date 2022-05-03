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

  minePendingTransactions() {
    this.blockchainInstance.minePendingTransactions(
      this.walletKeys[0].publicKey
    );
  }

  addressIsFromCurrentUser(address) {
    return address === this.walletKeys[0].publicKey;
  }

  static generateWalletKeys() {
    const ec = EC("secp256k1");
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic("hex"),
      privateKey: key.getPrivate("hex"),
    });

    console.log(this.walletKeys);
  }

  getPendingTransactions() {
    return this.blockchainInstance.pendingTransactions;
  }

  addTransaction(tx) {
    this.blockchainInstance.addTransaction(tx);
  }

  static getBlocks() {
    return this.blockchainInstance;
  }
  static getWalletKeys() {
    return this.walletKeys;
  }
}
