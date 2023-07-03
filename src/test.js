const bitcoin = require('./lib/Bitcoin');

const Bitcoin = new bitcoin();
const keypair = Bitcoin.generateKeypair();

console.log(keypair.privateKey);
console.log(keypair.address);