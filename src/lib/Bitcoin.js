const bitcoin = require('bitcoinjs-lib');
const { ECPairFactory } = require('ecpair');
const ecc = require('tiny-secp256k1');
const ECPair = ECPairFactory(ecc);

class Bitcoin {
    generateKeypair() {
        const keyPair = ECPair.makeRandom();
        const privateKey = keyPair.toWIF();
        const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
    
        return { privateKey, address };
    }
}

module.exports = Bitcoin;