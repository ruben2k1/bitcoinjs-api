## Transaction

* Get UTXOS

``` bash
const utxos = await Bitcoin.getUtxos(ADDRESS: string, NETWORK: string); //MAINNET OR TESTNET

console.log(utxos);
```