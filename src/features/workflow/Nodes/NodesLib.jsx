import { nodes } from "./nodesData";
import Node from "./Node";

const NodesLib = () => {
  return (
    <section className="m-auto">
      <div className="grid grid-cols-[1fr_1fr] md:grid-cols-1  gap-2">
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-2 text-neutral-200">Trigger</span>
          {nodes.filter((node) => node.category === "trigger").map((node) => <Node key={node.id} data={node}/>)}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-2 text-neutral-200">Data processing</span>
           {nodes.filter((node) => node.category === "dataprocessing").map((node) => <Node key={node.id} data={node}/>)}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-2 text-neutral-200">Logic</span>
           {nodes.filter((node) => node.category === "logic").map((node) => <Node key={node.id} data={node}/>)}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-2 text-neutral-200">Transformation</span>
           {nodes.filter((node) => node.category === "transform").map((node) => <Node key={node.id} data={node}/>)}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-2 text-neutral-200">Outputs</span>
           {nodes.filter((node) => node.category === "output").map((node) => <Node key={node.id} data={node}/>)}
        </div>
      </div>
    </section>
  );
};

export default NodesLib;
