'use strict'

let Graph = require('./');

describe('Test Dijkstras', function() {

	it('should find shortest path', function(done) {
		
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
		path.should.have.property('length', 3);
		path[0].should.equal('C');
		path[1].should.equal('G');
		path[2].should.equal('H');
		done();
	});
});