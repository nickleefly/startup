function listPrimes(count) {
    var primes = [];
    for(var n = 2; count > 0; n++) {
        if(isPrime(n, primes)) {
            primes.push(n);
            --count;
        }
    }
    return primes;
}

function isPrime(n, primes) {
    var max = Math.sqrt(n);
    for(var i = 0; i < primes.length && primes[i] <= max; i++) {
        if(n % primes[i] === 0)
            return false;
    }
    return true;
}

var fs = require('fs');
fs.writeFileSync('test.txt', listPrimes(100));