## Mnemonic

* Generate Mnemonic Seed

``` bash
const bitcoin = new Bitcoin();

const results = bitcoin.generateMnemonicSeed();

console.log(results);
```

* Generate Mnemonic Phrase and Segwit Native

``` bash
const bitcoin = new Bitcoin();

const results = bitcoin.generateMnemonicAndNativeSegwit(NETWORK : Network);

console.log(results);
```

* Generate WIF from XPRIV

``` bash
const bitcoin = new Bitcoin();

const results = bitcoin.getWIFfromXPRIV(XPRIV : string, NETWORK : Network);

console.log(results);
```