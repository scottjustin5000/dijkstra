# Dijkstra's shortest path finding

Implementation of the Dijkstra's shortest path between nodes in a graph.

### Example Usage

```js
let g = new Graph();
g.addVertex('A', { B: 7, C: 8 });
g.addVertex('B', { A: 7, F: 2 });
g.addVertex('C', { A: 8, F: 6, G: 4 });
g.addVertex('D', { F: 8 });
g.addVertex('E', { H: 1 });
g.addVertex('F', { B: 2, C: 6, D: 8, G: 9});
g.addVertex('G', { C: 4, F: 9, H: 4 });
g.addVertex('H', { E: 1, F: 3 });

let path = g.shortestPath('A', 'H');
// path = [ 'C', 'G', 'H' ]

```

## Testing

``
npm test
``



