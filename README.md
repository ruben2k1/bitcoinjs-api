# BitcoinJS (bitcoinjs-api)

A library to simplify the NPM package [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib).

Released under the terms of the [MIT LICENSE](LICENSE).

## Installation

``` bash
npm install bitcoinjs-api

npm install ecpair bip32 tiny-secp256k1
```

## Documentation

* Generate Legacy key pair

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const keypair = new bitcoinjsapi.Bitcoin().generateKeypairLegacy();

console.log(keypair.privateKey);
console.log(keypair.address);
```

* Generate Segwit key pair

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const keypair = new bitcoinjsapi.Bitcoin().generateKeypairSegwit();

console.log(keypair.privateKey);
console.log(keypair.address);
```

* Generate Legacy address from WIF

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const address = new bitcoinjsapi.Bitcoin().generateLegacyAddress(WIF);

console.log(address);
```