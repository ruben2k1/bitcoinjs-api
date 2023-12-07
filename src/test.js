const Bitcoin = require('./lib/Bitcoin');

(async () => {
    const bitcoin = new Bitcoin();

    const results = await bitcoin.getUtxos('bc1qput0gcms80khke8w6wgj433yglm9x8djg8u6w7', 'MAINNET'); //MAINNET OR TESTNET

    console.log(results);
})();