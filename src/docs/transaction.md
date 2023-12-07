## Transaction

* Get UTXOS

``` bash
const bitcoin = new Bitcoin();

const results = await bitcoin.getUtxos(ADDRESS: string, NETWORK: string); //MAINNET OR TESTNET

console.log(results);
```