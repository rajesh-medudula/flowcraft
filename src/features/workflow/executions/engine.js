import { dfs } from "./dfs";
import { createList } from "./dfs";


export const engine = (nodes, edges, initiateUpdate) => {
  const list = createList(nodes, edges);
  const initialNode = Object.keys(list)[0];
  
  const data = nodes[0].data?.maindata;
  const completed = dfs(list, initialNode, data, nodes, initiateUpdate);

  return completed;
}