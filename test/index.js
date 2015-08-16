var test = require('tap').test;

var computeSimilarity = require('../');

test('it can find most similar nodes', function(t) {
  var graph = loadSampleGraph();
  var jaccard = computeSimilarity(graph);

  // to find most similar node
  var results = [];

  graph.forEachLinkedNode(srcId, function(other) {
    var rank = jaccard(srcId, other.id);
    results.push({
      id: other.id,
      rank: rank
    })
  });

  t.end();
});

