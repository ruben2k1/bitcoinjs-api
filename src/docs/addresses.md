## Addresses

* Generate Legacy key pair

``` bash
const bitcoin = new Bitcoin();

const results = bitcoin.generateKeypairLegacy();

console.log(results);
```

* Generate Segwit key pair

``` bash
const bitcoin = new Bitcoin();

const results = bitcoin.generateKeypairSegwit();

console.log(results);
```

* Generate Testnet key pair

``` bash
const bitcoin = new Bitcoin();

const results = bitcoin.generateKeypairTestnet();

console.log(results);
```

* Generate Legacy address from WIF

``` bash
const bitcoin = new Bitcoin();

const address = bitcoin.generateLegacyAddressFromWIF(WIF : string);

console.log(address);
```

* Generate Segwit address from WIF

``` bash
const bitcoin = new Bitcoin();

const address = bitcoin.generateSegwitAddressFromWIF(WIF : string);

console.log(address);
```

* Generate P2SH, Pay-To-Multisig (2 of 3), address from XPUBS

``` bash
const bitcoin = new Bitcoin();

const address = bitcoin.generateP2SHAddress2of3(PUBKEY1 : string, PUBKEY2 : string, PUBKEY3 : string);

console.log(address);
```

* Generate Segwit P2WSH, Pay-To-Multisig (3 of 4), address from XPUBS

``` bash
const bitcoin = new Bitcoin();

const address = bitcoin.generateSegwitP2WSHAddress3of4(PUBKEY1 : string, PUBKEY2 : string, PUBKEY3 : string, PUBKEY4 : string);

console.log(address);
```