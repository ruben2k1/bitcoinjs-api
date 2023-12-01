## Addresses

* Generate Legacy key pair

``` bash
const bitcoinjsapi = require('bitcoinjs-api');

const keypair = new bitcoinjsapi.Bitcoin().generateKeypairLegacy();

console.log(keypair.privateKey);
console.log(keypair.publicKey);
console.log(keypair.address);
```

* Generate Segwit key pair

``` bash
const bitcoinjsapi = require('bitcoinjs-api');

const keypair = new bitcoinjsapi.Bitcoin().generateKeypairSegwit();

console.log(keypair.privateKey);
console.log(keypair.publicKey);
console.log(keypair.address);
```

* Generate Testnet key pair

``` bash
const bitcoinjsapi = require('bitcoinjs-api');

const keypair = new bitcoinjsapi.Bitcoin().generateKeypairTestnet();

console.log(keypair.privateKey);
console.log(keypair.publicKey);
console.log(keypair.address);
```

* Generate Legacy address from WIF

``` bash
const bitcoinjsapi = require('bitcoinjs-api');

const address = new bitcoinjsapi.Bitcoin().generateLegacyAddress(WIF);

console.log(address);
```

* Generate Segwit address from WIF

``` bash
const bitcoinjsapi = require('bitcoinjs-api');

const address = new bitcoinjsapi.Bitcoin().generateSegwitAddress(WIF);

console.log(address);
```

* Generate P2SH, Pay-To-Multisig (2 of 3), address from Pubkeys

``` bash
const bitcoinjsapi = require('bitcoinjs-api');

const address = new bitcoinjsapi.Bitcoin().generateP2SHAddress2of3(PUBKEY1, PUBKEY2, PUBKEY3);

console.log(address);
```

* Generate Segwit P2WSH, Pay-To-Multisig (3 of 4), address from Pubkeys

``` bash
const bitcoinjsapi = require('bitcoinjs-api');

const address = new bitcoinjsapi.Bitcoin().generateSegwitP2WSHAddress3of4(
'026477115981fe981a6918a6297d9803c4dc04f328f22041bedff886bbc2962e01',
'02c96db2302d19b43d4c69368babace7854cc84eb9e061cde51cfa77ca4a22b8b9',
'023e4740d0ba639e28963f3476157b7cf2fb7c6fdf4254f97099cf8670b505ea59',
'03c6103b3b83e4a24a0e33a4df246ef11772f9992663db0c35759a5e2ebf68d8e9',
);

console.log(address);
```

* Generate Mnemonic Phrase and Segwit Native

``` bash
const bitcoinjsapi  = require('bitcoinjs-api');

const results = new bitcoinjsapi.Bitcoin().generateMnemonicAndNativeSegwit(NETWORK);

console.log(results.mnemonic);
console.log(results.address);
```