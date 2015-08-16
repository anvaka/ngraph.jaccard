module.exports = computeSimilarity;

function computeSimilarity(graph) {
  var neigboursCache = Object.create(null);
  var api = getCoefficient;

  return api;

  function getCoefficient(fromId, toId) {
    var fromNeighbours = getNeighbours(fromId);
    var toNeighbours = getNeighbours(toId);

    return jaccard(fromNeighbours, toNeighbours);
  }

  function getNeighbours(nodeId) {
    var neighbours = neigboursCache[nodeId];
    if (!neighbours) {
      neighbours = Object.create(null);
      graph.forEachLinkedNode(nodeId, cacheNeigbour);

      // flatten it once, and sort so that we can quickly find intersectoin/union
      neighbours = neigboursCache[nodeId] = Object.keys(neighbours).sort();
    }

    return neighbours;

    function cacheNeigbour(neighbour) {
      neighbours[neighbour.id] = true;
    }
  }

  function jaccard(a, b) {
    var intersectCount = 0, unionCount = 0;
    var aIdx = 0, bIdx = 0;

    // advance in both arrays:
    while (aIdx < a.length && bIdx < b.length) {
      if (a[aIdx] === b[bIdx]) {
        intersectCount += 1;
        aIdx += 1;
        bIdx += 1;
      } else if (a[aIdx] < b[bIdx]) {
        aIdx += 1;
      } else {
        bIdx += 1;
      }
    }

    // since there is no intersection of two sets, there is no similarity:
    if (intersectCount === 0) return 0;

    unionCount = b.length + a.length - intersectCount;

    return intersectCount / unionCount;
  }
}
