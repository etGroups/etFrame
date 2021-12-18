import etFrame from 'etFrame';
import { test } from 'etFrame';

console.log(etFrame);
console.log(etFrame.host);

test('kaka')

let app = new etFrame('localhost', 80, {
    host: 'localhost',
    port: 80,
    isSSL: false
});

console.log('etFrame:', app);