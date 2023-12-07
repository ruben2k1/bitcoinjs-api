const Bitcoin = require('./lib/Bitcoin');

(async () => {
    const bitcoin = new Bitcoin();
    
    const results = bitcoin.generateMnemonicAndNativeSegwit(bitcoin.networks.bitcoin);

    console.log(results);
})();