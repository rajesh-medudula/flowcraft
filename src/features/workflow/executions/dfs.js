import { executor } from "./executor";

// creates list [id: [], id: [], id: []]
export const createList = (nodes, edges) => {
  const list = {};

  for (const node of nodes) {
    list[node.id] = [];
  }

  for (const edge of edges) {
    if (list[edge.source] && list[edge.target]) {
      list[edge.source].push(edge.target);
    }
  }

  return list;
}


// traversal
export const dfs = (list, nodeId, data, nodes, initiateUpdate, visited = []) => {
  if (visited.includes(nodeId)) return;
  visited.push(nodeId);
  const newData = executor(nodeId, nodes, data, initiateUpdate);
  if (Array.isArray(list[nodeId])) {
    for (let i = 0; i < list[nodeId].length; i++) {
      dfs(list, list[nodeId][i], newData, nodes, initiateUpdate, visited);
    }
  }
}