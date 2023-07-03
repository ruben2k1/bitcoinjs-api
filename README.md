# BitcoinJS (bitcoinjs-api)

A library to simplify the NPM package [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib).

Released under the terms of the [MIT LICENSE](LICENSE).

## Documentation

* Generate key pair (private and public)

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const keypair = new bitcoinjsapi.Bitcoin().generateKeypair();

console.log(keypair.privateKey);
console.log(keypair.address);
```

## Instalation

``` bash
npm install bitcoinjs-api

npm install ecpair bip32 tiny-secp256k1
```