const fib = n => {
    if (n <= 1) return 1
    return fib(n - 1) + fib(n - 2)
}

const memoizedFib = (n, memo) => {
    memo = memo || {}

    if(memo[n]) return memo[n];

    if(n <= 1) return 1;

    return memo[n] = memoizedFib(n - 1, memo) + memoizedFib( n - 2, memo)
}

console.log("Memoized Fib:",memoizedFib(100));

console.log("Fib:",fib(100));
