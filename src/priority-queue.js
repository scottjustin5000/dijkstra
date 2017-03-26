'use strict'

class PriorityQueue {

	constructor() {
		this.nodes = [];	
	}

	enqueue(priority, key) {
		this.nodes.push({key: key, priority: priority });
    	this.sort();
	}

	dequeue() {
		return this.nodes.shift().key;
	}

	sort() {
		this.nodes.sort(function (a, b) {
      		return a.priority - b.priority;
    	});
	}

	isEmpty() {
		return !this.nodes.length;
	}
}
module.exports = PriorityQueue;