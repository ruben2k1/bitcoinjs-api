## Transaction

* Get UTXOS

``` bash
const bitcoin = new Bitcoin();

const results = await bitcoin.getUtxos(ADDRESS: string, NETWORK: Network);

console.log(results);
```

* Get balance

``` bash
const bitcoin = new Bitcoin();

const results = await bitcoin.getBalance(ADDRESS : string, NETWORK : Network);

console.log(results);
```

* Get estimated fees

``` bash
const bitcoin = new Bitcoin();

const results = await bitcoin.getEstimatedFees(NETWORK : Network);

console.log(results);
```