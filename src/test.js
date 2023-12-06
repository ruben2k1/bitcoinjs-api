const bitcoin = require('./lib/Bitcoin');
const Bitcoin = new bitcoin();

(async () => {
    const address = await Bitcoin.getUtxos('bc1qput0gcms80khke8w6wgj433yglm9x8djg8u6w7', 'MAINNET');

    console.log(address);
})();