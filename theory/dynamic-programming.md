# Dynamic programming

The idea is in general to solve a problem by first identifying sub problems. Then using the subproblems together to solve the larger problem.

Steps to solve.

1. Visualise Examples

- DAG graph??

2. Find the sub problem

Three steps

1. Recursive solution
2. Store (memoize) memoize != meorise
3. Bottom up

A great way to demostrate where recursion is an excellant solution to a problem is the Fibonacci Sequence. This sequence is as follows:

```
1, 1, 2, 3, 5, 8, 13 ..., n
```

And can be described by the following function:

```
f(n) = n + f(n-1)
```

A recursive solution for this problem is TypeScript can be defined as follows:

```ts
function fib(n: number) {
  /// 1. base case
  if (n === 1 || n === 2) {
    return 1;
  }

  /// 2. Recursion case
  return n + fib(n - 1);
}
```

when fib(4) is called the call stack can can represented as follows:

```
fib(2) = 1
fib(3) = fib(2) + fib(1)
fib(4) = fib(3) + fib(2)
```

Where the results will be processed in FILO (first in last out) order. So... we will get

```
fib(2) = 1
fib(3) = 1 + 1 = 2
fib(4) = 2 + 1 = 3
```

This calculation sequence can be described as a tree data structure as follows:

```
    fib(4)
   /    \
fib(3)  fib(2)
 /  \       \
fib(2) fib(1)     1
```

As you can see this calculation can get quite inefficient, due to the repetition in the function calls. E.g fib(2) is called twice in the above fibonacci tree.

what memoization says is that you store the result of fib(2) is memory somewhere so the next time that fib(2) is called your have already moized that result and can simply look it up again.

The way we do that is simply store the result of fib(n) in the nth index of an array and update the recursive solution to look at this position in the array.

```ts
function fib(n: number, memoized: number[]) {
  /// 1. Memoized case
  if (memoized[n] != null) {
    return memoized[n];
  }

  /// 2. base case
  if (n === 1 || n === 2) {
    return 1;
  }

  /// 3. Recursion case
  const result = n + fib(n - 1);
  memoized[n] = result;

  return result;
}
```

As you can see this changes the T complexity of this solution significantly as each fibonacci number in the sequence can only have thir function called once and subsequent calls are looked out from the array of information already stored in memory.

But we can actually define this solution in another method called bottom up, and just like we execute a recurrsive function in essence from bottom up, we can saolve this problem by storing the results of each fibonacci function in a bottom up approach in an array.

```ts
function fib_bottom_up(n: number) {
  if (n == 1 || n == 2) {
    return 1;
  }
  /// 1. Define the results array
  const arr = new int(n + 1);

  /// 2. Define the base case
  arr[1] = 1;
  arr[2] = 1;

  /// 3. Loop through array from the bottom up
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  /// 4. return the result
  return arr[n];
}
```
