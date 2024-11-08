
function factorial(n) {
    let result = 1;

    if (n < 0) { return null; } // Negative Numbers Aren't Allowed
    if (n == 0) { return 1; }

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

function e(n) {
    let result = 1.0;
    let fac = 1.0;

    if (n < 0) { return null; } // Negative Numbers Aren't Allowed
    if (n == 0) { return result; }

    for (let i = 1; i <= n; i++) {
        fac *= i;
        result +=  (1.0 / fac);
    }

    return result;
}
