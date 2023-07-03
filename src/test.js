const bitcoin = require('./lib/Bitcoin');

const Bitcoin = new bitcoin();
const keypair = Bitcoin.generateKeypairSegwit();

console.log(keypair.privateKey);
console.log(keypair.address);