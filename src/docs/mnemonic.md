## Mnemonic

* Generate Mnemonic Seed

``` bash
const bitcoinjsapi = require('bitcoinjs-api');

const mnemonicSeed = new bitcoinjsapi.Bitcoin().generateMnemonicSeed();

console.log(mnemonicSeed);
```

* Generate Mnemonic Phrase and Segwit Native

``` bash
const bitcoinjsapi = require('bitcoinjs-api');

const results = new bitcoinjsapi.Bitcoin().generateMnemonicAndNativeSegwit(NETWORK);

console.log(results.mnemonic);
console.log(results.address);
```

* Generate WIF from XPRIV

``` bash
const Bitcoin = require('bitcoinjs-api').Bitcoin;

const bitcoin = new Bitcoin();

const WIF = await bitcoin.getWIFfromXPRIV(XPRIV : string, NETWORK : Network); //bitcoin.networks.bitcoin or bitcoin.networks.testnet

console.log(WIF);
```