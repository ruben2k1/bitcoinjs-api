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

* Get address confirmed transactions (valid for now for testnet addresses)

``` bash
const bitcoin = new Bitcoin();

const results = await bitcoin.getAddressConfirmedTransactions(ADDRESS : string);

console.log(results);
```

* Get address unconfirmed transactions (valid for now for testnet addresses)

``` bash
const bitcoin = new Bitcoin();

const results = await bitcoin.getAddressUnconfirmedTransactions(ADDRESS : string);

console.log(results);
```