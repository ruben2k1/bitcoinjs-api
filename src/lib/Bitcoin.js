const bitcoin = require('bitcoinjs-lib');
const { ECPairFactory } = require('ecpair');
const ecc = require('tiny-secp256k1');
const ECPair = ECPairFactory(ecc);

class Bitcoin {
    generateKeypairLegacy() {
        const keyPair = ECPair.makeRandom();
        const privateKey = keyPair.toWIF();
        const publicKey = keyPair.publicKey.toString('hex');
        const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
    
        return { privateKey, publicKey, address };
    }

    generateKeypairSegwit() {
        const keyPair = ECPair.makeRandom();
        const publicKey = keyPair.publicKey.toString('hex');
        const privateKey = keyPair.toWIF();
        const { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey });
    
        return { privateKey, publicKey, address };
    }

    generateKeypairTestnet() {
        const TESTNET = bitcoin.networks.testnet;
    
        const keyPair = ECPair.makeRandom({ network: TESTNET });
        const publicKey = keyPair.publicKey.toString('hex');
        const privateKey = keyPair.toWIF();
    
        const { address } = bitcoin.payments.p2pkh({
          pubkey: keyPair.publicKey,
          network: TESTNET
        });
    
        return { privateKey, publicKey, address };
    }

    generateLegacyAddress(WIF) {
        const keyPair = ECPair.fromWIF(
            WIF
        );
    
        const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
    
        return address;
    }

    generateSegwitAddress (WIF) {
        const keyPair = ECPair.fromWIF(
            WIF
        );
    
        const { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey });
    
        return address;
    }

    generateP2SHAddress2of3 (PUBKEY1, PUBKEY2, PUBKEY3) {
        const pubkeys = [
            PUBKEY1,
            PUBKEY2,
            PUBKEY3,
        ].map(hex => Buffer.from(hex, 'hex'));
        
        const { address } = bitcoin.payments.p2sh({
            redeem: bitcoin.payments.p2ms({ m: 2, pubkeys })
        });
        
        return address;
    }
}

module.exports = Bitcoin;