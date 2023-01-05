// Question 1 - Sum all numbers

function sumRange(n) {
    if (n <= 0) {
        return 0;
    }
    return n + sumRange(n-1);
}