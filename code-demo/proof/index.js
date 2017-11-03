
var mt = require('merkle-tools');

var m = new mt();

m.addLeaf('7d49f074d2c3fa193e305bc109892f20760cbbecc218b43394a9356da35a72b3');

m.addLeaf('ba78a656108137a01f104b82a3554cedffce9f36e8a4149d68e0310b0943c09d');

m.addLeaves( ['x', 'y', 'z'], true );

m.makeTree();

var p1 = m.getProof(0);

var p2 = m.getProof(1);

var p3 = m.getProof(2);

m.resetTree();

