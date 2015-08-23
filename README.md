# ngraph.jaccard

Birds of a feather flock together. Turns out people who inspire me in my
programming life also inspire me to follow other people whom they follow.

Can we solve a reverse problem? Among all people whom I follow, who follows the
same people as I do?

Turns out Jaccard Similarity can give weighted answer to this question. Jaccard
similarity of two nodes `a` and `b` is defined as:

```
J(a, b) = (N(a) ∩ N(b)) / (N(a) ∪ N(b))
```

Where `N(a)` is set of neighbors of node `a`. This module allows you to compute
similarity of each node in the graph.

# usage

```
var createCalculator = require('ngraph.jaccard');

// graph is instance of ngraph.graph
var jaccard = createCalculator(graph);

// compute jaccard similarity for each connected node:
graph.forEachLink(computeSimilarity);

function computeSimilarity(link) {
  var similarity = jaccard(link.fromId, link.toId);
  console.log('Jaccard similarity between ' +
    link.fromId + ' and ' + link.toId + ' is ' + similarity);
}
```

# install

This module is not yet published to npm since I don't like the API. Feel free to
install it from github if you'd like to play with it:

```
npm i anvaka/ngraph.jaccard
```

The API is subject to change.

# license

MIT
