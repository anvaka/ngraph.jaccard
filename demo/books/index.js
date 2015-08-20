// podcast.json is a graph file rendered by http://www.yasiv.com/#/Search?q=podcast&category=Books&lang=US
var fromjson = require('ngraph.fromjson');
var podcastBooksGraph = fromjson(require('./podcast.json'));
var createCalculator = require('../../index.js');

var all = [];

var jaccard = createCalculator(podcastBooksGraph);
podcastBooksGraph.forEachLink(computeSimilarity);
console.log(all.sort(byRank));

function computeSimilarity(link) {
  all.push({
    rank: jaccard(link.fromId, link.toId),
    from: link.fromId,
    to: link.toId
  });
}

function byRank(x, y) {
  return y.rank - x.rank;
}
