// Question 1 - Sum all numbers

function sumRange(n) {
    if (n <= 0) {
        return 0;
    }
    return n + sumRange(n-1);
}

// Question 2 - Power function

function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}