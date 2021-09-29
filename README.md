# Theory

Core theory that shouldbe understood when answering any solution on a code test platform.

## Big O Notation

Big O notation represents how the runtime of a function scales. It can be described by the following function:

```javascript
O(N)
```
Where:
    O = operations
    N = input / any variable that you want to define the operations on


### Examples

O(1)    constant time with respect to the input
O(N)    scales linearly with input (solution has no nested loops and all happens in a single pass)
O(N^2)  scales quadratically to the input (solution has nested loops)
O(N+M)  scales linearly to input N and M (loops over N once and M once)
O(N+N)  scales linearly with input but passes over the sequence twice

O(1) can be thought of using the following example:

A carrier pidgeon vs. internet in transfering data. The internet will scale linearly to the size of the data. The carrier pidgeon will always take the same amount of time irrespective of the data size.

## Important Rules

1. Multiple steps get added

```javascript
function something(A, B) {
    doStep1(A)
    doStep2(B)
}

// complexity is:
O(A + B)
```

2. Drop constants

```javascript
function something(N) {
    doStep1(N)
    doStep2(N)
}

// complexity is:
O(N)
// NOT:
O(2N)
// i.e. constant is dropped
```

3. Different inputs = Different variables

```javascript
function something(A, B) {
    for (var i = 0; i < A.length; i++) {
        for (var n = 0; n < B.length; n++) {
            // do something
        }
    }
}

// complexity is:
O(A * B)
// NOT:
O(A^2)
// i.e. operations much be defined relative to unique inputs
```

4. Drop non dominant terms

```javascript
function something(N) {
    for (var i = 0; i < N.length; i++) {
        // do something
    }
    for (var i = 0; i < N.length; i++) {
        for (const e of N) {
            // do something
        }
    }
}

// complexity is:
O(N^2)
// NOT:
O(N + N^2)
// i.e. the non dominant N gets dropped
```