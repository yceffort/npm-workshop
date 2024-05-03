import crypto from 'node:crypto'

const inputString = 'Hello, World!';
const hash = crypto.createHash('sha256').update(inputString).digest('hex');
console.log(hash);