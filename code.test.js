const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');


// factorial() Function Testing
assert(factorial(-10) === null);
assert(factorial(0) === 1);
assert(factorial(1) === 1);
assert(factorial(2) === 2);
assert(factorial(3) === 6);
assert(factorial(4) === 24);
assert(factorial(5) === 120);
assert(factorial(10) === 3628800);
assert(factorial(11) === 39916800);
assert(factorial(13) === 6227020800);


// e() Function Testing
assert(e(-10) === null);
assert(e(0) === 1);
assert(e(1) === 2);
assert(e(2) === 2.5);
assert(e(3) === 2.6666666666666665);
assert(e(5) === 2.7166666666666663);
assert(e(10) === 2.7182818011463845);
assert(e(100) === 2.7182818284590455);
