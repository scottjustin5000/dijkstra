'use strict'

let PriorityQueue = require('./priority-queue');

class Graph {

	constructor() {
		this.vertices = {};
		this.INFINITY = 1/0;
	}

	addVertex(name, edges) {
		//'A', { B: 7, C: 8 }
		this.vertices[name] = edges;
	}

	shortestPath(start, target) {
		let distances = {};
		let previous = {}; //a hash of previous node to the curent node in the optimal path
		let shortestPathTree = new PriorityQueue();
		let shortestPath = [];
		//A tentative distance value is assigned to every node; this value is set to zero for the initial node, and to infinity for all other nodes.
		//We also add our source or starting point to our shortestPathTree nodes 
		for(let vertex in this.vertices) { //vertex is the prop key, i.e. A,B, C, etc
			if(vertex === start) {
				distances[vertex] = 0;
				shortestPathTree.enqueue(0, vertex);
		  	} else {
				distances[vertex] = this.INFINITY;
		  	}
		  	//set previous distance = null
		 	previous[vertex] = null;
		}
		//loop as long as we have nodes in path queue
		while(!shortestPathTree.isEmpty()) {
			let current = shortestPathTree.dequeue();

			//if we have no node or our distance is set to Infinity, return
			if(!current || distances[current] === this.INFINITY) {
				continue;
		  	}

			//if the current node is our target, get our shortest path by walking through our previous hash
			if(current === target) {

				while(previous[current]) {
					shortestPath.push(current);
			  		current = previous[current];
				}

				break;

			}
			//otherwise For the current node, take into account all the unvisited edge nodes, and calculate their tentative distances. 
			for(let neighbor in this.vertices[current]) {
				//get distance for the current node, add it to the distance value assigned for that edge
				//for example, if our current node X was marked with a distance of 4, and the edge connecting it with a neighbor node Y has length 1, 
				//then the distance through X to Y will be 4 + 1 = 5
				let alt = distances[current] + this.vertices[current][neighbor];
				//next we check which value is smaller, the previous amount or our tentative amount calculated above
				//if the distance is lower, then we:
				// update distance for the neightbor
				// update previous hash (to store the previous node in our optimal path)
				// enqueue the neighbor (with the distance) to our queue
				if(alt < distances[neighbor]) {
					distances[neighbor] = alt;
					previous[neighbor] = current;
					shortestPathTree.enqueue(alt, neighbor);
				}

			}
		}

		return shortestPath.length ? shortestPath.reverse() : shortestPath;
		
	}
}
module.exports = Graph;