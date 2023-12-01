## Addresses

* Generate Legacy key pair

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const keypair = new bitcoinjsapi.Bitcoin().generateKeypairLegacy();

console.log(keypair.privateKey);
console.log(keypair.publicKey);
console.log(keypair.address);
```

* Generate Segwit key pair

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const keypair = new bitcoinjsapi.Bitcoin().generateKeypairSegwit();

console.log(keypair.privateKey);
console.log(keypair.publicKey);
console.log(keypair.address);
```

* Generate Testnet key pair

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const keypair = new bitcoinjsapi.Bitcoin().generateKeypairTestnet();

console.log(keypair.privateKey);
console.log(keypair.publicKey);
console.log(keypair.address);
```

* Generate Legacy address from WIF

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const address = new bitcoinjsapi.Bitcoin().generateLegacyAddress(WIF);

console.log(address);
```

* Generate Segwit address from WIF

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const address = new bitcoinjsapi.Bitcoin().generateSegwitAddress(WIF);

console.log(address);
```

* Generate P2SH, Pay-To-Multisig (2 of 3), address from Pubkeys

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const address = new bitcoinjsapi.Bitcoin().generateP2SHAddress2of3(PUBKEY1, PUBKEY2, PUBKEY3);

console.log(address);
```

* Generate Mnemonic Phrase and Segwit Native

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const results = new bitcoinjsapi.Bitcoin().generateMnemonicAndNativeSegwit(NETWORK);

console.log(results.mnemonic);
console.log(results.address);
```