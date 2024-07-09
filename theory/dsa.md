# data structures and algorithms

## data structures

linear data data structures

- array data strucutre

```
[1, 2, 3, 4, 5, ...]
```

- stack data structure

```
3 (top)    <- Top element (just pushed)
2
1
```

- que data structure

```
        _______
add - > 3, 2, 1 -> remove
        _______
```

- linked list data structure

```
Head
 |
 v
+-----+------+      +-----+------+      +-----+------+      +-----+------+
| 1st | Next | ---> | 2nd | Next | ---> | 3rd | Next | ---> | 4th | NULL |
|Node | Node |      |Node | Node |      |Node | Node |      |Node |      |
+-----+------+      +-----+------+      +-----+------+      +-----+------+
```

Head: The starting point of the linked list, pointing to the first node.
Node: Each node contains two parts:
Data: The value stored in the node (e.g., 1st Node, 2nd Node, etc.).
Next: A reference to the next node in the list.
NULL: The end of the list, indicating that there are no more nodes.

- doubley linked list

```
Head
 |
 v
+------+-----+------+      +------+-----+------+      +------+-----+------+      +------+-----+------+
| NULL |Prev | 1st  | ---> | 1st  |Prev | 2nd  | ---> | 2nd  |Prev | 3rd  | ---> | 3rd  |Prev | NULL |
|      |Node | Node | <--- | Node |Node | Node | <--- | Node |Node | Node | <--- | Node |Node |      |
+------+-----+------+      +------+-----+------+      +------+-----+------+      +------+-----+------+
```

Head: The starting point of the linked list, pointing to the first node.
Node: Each node contains three parts:
Prev: A reference to the previous node in the list (or NULL if it's the first node).
Data: The value stored in the node (e.g., 1st Node, 2nd Node, etc.).
Next: A reference to the next node in the list (or NULL if it's the last node).
NULL: Indicates the end of the list in both directions.

## non linear data structures

not in any sequence. Instead they are arranged in a hierarchical manner where one element will be connected to one or more elements.

### graph data structure

undirected graph

```
     A
    / \
   B---C
   |   |
   D---E
```

directed graph

```
     A
    / \
   v   v
   B-->C
   ^   |
   |   v
   D<--E
```

Nodes (Vertices): Represented by letters (A, B, C, D, E).
Edges: Represented by lines connecting the nodes.
Undirected Graph: Edges don't have a direction (e.g., the connection between A and B).
Directed Graph: Edges have a direction indicated by arrows (e.g., the connection from A to B).

Adjacency List Representation

```
Graph:
  A -> [B, C]
  B -> [A, C, D]
  C -> [A, B, E]
  D -> [B, E]
  E -> [C, D]
```

Explanation
A -> [B, C]: Node A is connected to nodes B and C.
B -> [A, C, D]: Node B is connected to nodes A, C, and D.
C -> [A, B, E]: Node C is connected to nodes A, B, and E.
D -> [B, E]: Node D is connected to nodes B and E.
E -> [C, D]: Node E is connected to nodes C and D.

### tree data structures

Similar to a graph, a tree is also a collection of vertices and edges. However, in tree data structure, there can only be one edge between two vertices.

```
       A
      / \
     B   C
    / \   \
   D   E   F
```

Root Node (A): The topmost node in the tree.
Child Nodes (B, C): Nodes that are directly connected to another node when moving away from the Root.
Leaf Nodes (D, E, F): Nodes with no children.
