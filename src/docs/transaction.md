## Transaction

* Get UTXOS

``` bash
const Bitcoin = require('bitcoinjs-api').Bitcoin;

const bitcoin = new Bitcoin();

const utxos = await bitcoin.getUtxos(ADDRESS: string, NETWORK: string); //MAINNET OR TESTNET

console.log(utxos);
```