const Bitcoin = require('./lib/Bitcoin');

(async () => {
    const bitcoin = new Bitcoin();

    const results = await bitcoin.getEstimatedFees(bitcoin.networks.bitcoin);

    console.log(results);
})();