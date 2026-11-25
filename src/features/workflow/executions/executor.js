import { filter } from "./nodeExecutors/filter";
import { output } from "./nodeExecutors/output";

export const executor = (nodeId, nodes, data, initiateUpdate) => {
  const node = nodes.find((node) => node.id === nodeId);

  const config = node.data?.config;
  if (!node || !config || !config?.operation) {
    return data;
  };
  
  if (config.operation === "F1") {
    const newData = filter(data, config);
    return newData;
  }

  if (config.operation === "F10") {
    const newData = output(data, config);
    initiateUpdate(nodeId, newData);
    return newData;
  }
}