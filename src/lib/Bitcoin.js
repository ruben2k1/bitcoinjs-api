const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');
const { BIP32Factory } = require('bip32');
const { ECPairFactory } = require('ecpair');
const ecc = require('tiny-secp256k1');
const ECPair = ECPairFactory(ecc);
const bip32 = BIP32Factory(ecc);
const { networks } = bitcoin;
const axios = require('axios').default;

class Bitcoin {
    constructor() {
        this.ECPair = ECPairFactory(ecc);
        this.bip32 = BIP32Factory(ecc);
        this.bip39 = bip39;
        this.networks = networks;
    }

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

    generateLegacyAddressFromWIF (WIF) {
        const keyPair = ECPair.fromWIF(
            WIF
        );
    
        const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
    
        return address;
    }

    generateSegwitAddressFromWIF (WIF) {
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

    generateSegwitP2WSHAddress3of4 (PUBKEY1, PUBKEY2, PUBKEY3, PUBKEY4) {
        const pubkeys = [
            PUBKEY1,
            PUBKEY2,
            PUBKEY3,
            PUBKEY4
        ].map(hex => Buffer.from(hex, 'hex'));
        
        const { address } = bitcoin.payments.p2wsh({
            redeem: bitcoin.payments.p2ms({ m: 3, pubkeys }),
        });
        
        return address;
    }

    generateMnemonicSeed() {
        const mnemonic = bip39.generateMnemonic();
    
        return mnemonic;
    }

    generateMnemonicAndNativeSegwit (NETWORK) {
        if (!NETWORK) {
            throw new Error('You must specify a network');
        }
    
        const mnemonic = bip39.generateMnemonic();
        const seed = bip39.mnemonicToSeedSync(mnemonic);
        const rootNode = bip32.fromSeed(seed, NETWORK);
    
        const childNode = rootNode.derivePath("m/84'/0'/0'/0/0");
        const { address } = bitcoin.payments.p2wpkh({ pubkey: childNode.publicKey, network: NETWORK });
        
        return { mnemonic, address }
    }

    async getUtxos (ADDRESS, NETWORK) {
        if (!ADDRESS) {
            throw new Error('You must specify an address');
        } else if (!NETWORK) {
            throw new Error('You must specify a network');
        }

        if (NETWORK === bitcoin.networks.bitcoin) {
            const utxos = await axios(`https://blockstream.info/api/address/${ADDRESS}/txs`);

            return utxos.data;
        } else if (NETWORK === bitcoin.networks.testnet) {
            const utxos = await axios(`https://blockstream.info/testnet/api/address/${ADDRESS}/utxo`);

            return utxos.data;
        }
    }

    getWIFfromXPRIV (XPRIV, NETWORK) {
        if (!XPRIV) {
            throw new Error('You must specify XPRIV');
        } else if (!NETWORK) {
            throw new Error('You must specify a network');
        }

        const WIF = bip32.fromBase58(XPRIV, NETWORK).toWIF();
    
        return WIF;
    }

    async getBalance (ADDRESS, NETWORK) {
        if (!ADDRESS) {
            throw new Error('You must specify an address');
        } else if (!NETWORK) {
            throw new Error('You must specify a network');
        }

        if (NETWORK === bitcoin.networks.bitcoin) {
            const results = await axios(`https://api.blockcypher.com/v1/btc/main/addrs/${ADDRESS}/balance`);
        
            return results.data;
        }else if (NETWORK === bitcoin.networks.testnet) {
            const results = await axios(`https://api.blockcypher.com/v1/btc/test3/addrs/${ADDRESS}/balance`);
        
            return results.data;
        }
    }

    async getEstimatedFees (NETWORK) {
        if (!NETWORK) {
            throw new Error('You must specify a network');
        }

        if (NETWORK === bitcoin.networks.bitcoin) {
            const results = await axios('https://mempool.space/api/v1/fees/recommended');
    
            return results.data;
        }else if (NETWORK === bitcoin.networks.testnet) {
            const results = await axios('https://mempool.space/testnet/api/v1/fees/recommended');
    
            return results.data;
        }
    }
}

module.exports = Bitcoin;