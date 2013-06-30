function listPrimes(count) {
    var primes = [];
    for(var n = 2;  count > 0; n++) {
        if(isPrime(n)) {
            primes.push(n);
            --count;
        }
    }
    return primes;
}

function isPrime(n) {
    var max = Math.sqrt(n);
    for(var i = 2; i <= max; i++) {
        if(n % i === 0)
            return false;
    }
    return true;
}

var fs = require('fs');
fs.writeFileSync('test.txt', listPrimes(100));