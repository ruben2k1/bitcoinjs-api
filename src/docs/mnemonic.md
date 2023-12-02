## Mnemonic

* Generate Mnemonic Phrase and Segwit Native

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const results = new bitcoinjsapi.Bitcoin().generateMnemonicAndNativeSegwit(NETWORK);

console.log(results.mnemonic);
console.log(results.address);
```

* Generate Mnemonic Seed

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const mnemonicSeed = new bitcoinjsapi.Bitcoin().generateMnemonicSeed();

console.log(mnemonicSeed);
```