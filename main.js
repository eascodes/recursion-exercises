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

// Question 3 - Calculate factorial

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

// Question 4 - Check all values in an array

function all(arr, func) {
    if (arr.length < 1) return true;
    if (!func(arr[0])) return false;
    let copy = arr;
    copy.shift();
    return all(copy, func);
}

