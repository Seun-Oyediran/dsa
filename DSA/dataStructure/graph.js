"use strict";
class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.marked = [];
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
            this.marked[i] = false;
            // this.adj[i].push("");
        }
    }
    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    showGraph() {
        let a;
        for (let i = 0; i < this.vertices; i++) {
            a = `${i} -> `;
            for (let j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] != undefined) {
                    a += `${this.adj[i][j]} `;
                }
            }
            console.log(a);
        }
    }
    depthFirstSearch(v) {
        this.marked[v] = true;
        if (this.adj[v] != undefined) {
            console.log(`Visited vertex: ${v}`);
        }
        for (let i = 0; i < this.adj[v].length; i++) {
            let index = this.adj[v][i];
            if (!this.marked[index]) {
                this.depthFirstSearch(index);
            }
        }
    }
}
const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.depthFirstSearch(0);
