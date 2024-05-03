const nodeCrypto = require('node:crypto')

const inputString = 'Hello, World!';
const hash = nodeCrypto.createHash('sha256').update(inputString).digest('hex');
console.log(hash);