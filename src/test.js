const bitcoin = require('./lib/Bitcoin');
const btc = require('bitcoinjs-lib');
const Bitcoin = new bitcoin();
const results = Bitcoin.generateMnemonicAndNativeSegwit(btc.networks.bitcoin);

console.log(results.mnemonic);
console.log(results.address);