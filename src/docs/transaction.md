## Transaction

* Get UTXOS

``` bash
const bitcoinjsapi = require('bitcoinjs-api');

const utxos = new bitcoinjsapi.Bitcoin().getUtxos(ADDRESS: string, NETWORK: string);

console.log(utxos);
```