const Bitcoin = require('./lib/Bitcoin');
const { networks } = require('bitcoinjs-lib');

(async () => {
    const bitcoin = new Bitcoin();
    
    const WIF = bitcoin.getWIFfromXPRIV('xprv9s21ZrQH143K4DRBUU8Dp25M61mtjm9T3LsdLLFCXL2U6AiKEqs7dtCJWGFcDJ9DtHpdwwmoqLgzPrW7unpwUyL49FZvut9xUzpNB6wbEnz', networks.bitcoin);

    console.log(WIF);
})();