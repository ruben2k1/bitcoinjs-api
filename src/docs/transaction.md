## Transaction

* Get address UTXOS

``` bash
const bitcoin = new Bitcoin();

const results = await bitcoin.getAddressUtxos(ADDRESS: string, NETWORK: Network);

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

* Get address confirmed transactions

``` bash
const bitcoin = new Bitcoin();

const results = await bitcoin.getAddressConfirmedTransactions(ADDRESS : string, NETWORK : Network);

console.log(results);
```

* Get address unconfirmed transactions

``` bash
const bitcoin = new Bitcoin();

const results = await bitcoin.getAddressUnconfirmedTransactions(ADDRESS : string, NETWORK : Network);

console.log(results);
```

* Get transaction serialized as hex

``` bash
const bitcoin = new Bitcoin();

const results = await bitcoin.getHexTransaction(TXID : string, NETWORK : Network);

console.log(results);
```