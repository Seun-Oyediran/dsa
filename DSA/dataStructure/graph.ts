class Graph {
  vertices: number;
  edges: number;
  adj: Array<any>;
  marked: boolean[];

  constructor(v: number) {
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

  addEdge(v: number, w: number) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  showGraph() {
    let a: string;
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

  depthFirstSearch(v: number) {
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

  // breadthFirstSearch(v: number) {
  //   this.marked[v] = true;
  //   const breadthQueue = new Queue();
  //   breadthQueue.enqueue(v);
  //   while (breadthQueue.dataStore.length > 0) {
  //     let s = breadthQueue.deque();
  //     if (s == undefined) {
  //       console.log(`Visited vertex: ${s}`);
  //     }

  //     for (let i = 0; i < this.adj[s].length; i++) {
  //       let index = this.adj[s][i];
  //       if (!this.marked[index]) {
  //         // this.edgeTo[w] = v;
  //         this.marked[index] = true;
  //         breadthQueue.enqueue(index);
  //       }
  //     }
  //   }
  // }
}

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();

g.depthFirstSearch(0);
