const Bitcoin = require('./lib/Bitcoin');

(async () => {
    const bitcoin = new Bitcoin();
    
    const utxos = await bitcoin.getUtxos('bc1qput0gcms80khke8w6wgj433yglm9x8djg8u6w7', 'MAINNET');

    console.log(utxos);
})();