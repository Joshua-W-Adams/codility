# Hash maps

A hash map (or hash table) is a data structure that maps keys to values using a hash function to compute an index.

These hashs are calculated from the key of the associated data. Therefore to look up an item in a hash map, you simply calculate the hash and are returned the index of the item in the hash table. This results in O(1) [or constant] time complexity in looking up items.

A hash table can be visualised as follows:

```js
## Array (Hash Table)

[
hash: {key, value},
hash: {key, value},
hash: {key, value},
hash: {key, value},
]

or like so...

| 0 | {key1, value1} |
| 1 | {key2, value2} |
| 2 | {key3, value3} |
| 3 | {key4, value4} |
|...| ... |

```

Where:

- hash = hashfn(key), where hash is a integer (or hash code)
- hash is the index in the table
