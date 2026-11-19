import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteWorkflow } from "./WorkflowsSlice";

// const workflowTestData = {
//   id: 1,
//   title: "Customer Data Trasform",
//   description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel
//         facilis cupiditate ipsum labore! Amet autem molestias, sapiente, fuga
//         illo reiciendis est possimus odio in corrupti labore excepturi
//         repudiandae. Ullam`,
//   status: "Deployed",
//   nodes: [{}, {}, {}],
//   created: "10 Nov, 2026",
//   lastupdated: "2 hours Ago",
// };


const Menu = ({id}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWorkflow(id));
  }

  return (
    <div className="absolute flex gap-1 flex-col bottom-2 right-7 bg-gray-900 p-2">
        <button className="cursor-pointer hover:underline">Rename</button>
        <button className="cursor-pointer hover:underline">Duplicate</button>
        <button className="cursor-pointer hover:underline">Export JSON</button>
        <button onClick={handleDelete} className="cursor-pointer hover:underline">Delete</button>
    </div>
  );
};


const WorkflowCard = ({workflow}) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="bg-gray-700 p-2 flex flex-col gap-2 relative">
      <div className="grid grid-cols-[1fr_auto]">
        <h1 className="col-span-1 font-semibold">{workflow.title}</h1>
        <p className="text-sm text-neutral-200">{workflow.description}</p>
        {workflow.status === "Deployed" ? (
          <span className="row-start-1 col-start-2 text-sm bg-green-200 p-1 text-black font-bold rounded-2xl">
            {workflow.status}
          </span>
        ) : (
          <span className="row-start-1 col-start-2 text-sm bg-orange-200 p-1 text-black font-bold rounded-2xl">
            {workflow.status}
          </span>
        )}
      </div>

      <div className="grid grid-cols-[1fr_1fr] bg-gray-600 gap-1 mt-auto">
        <div className="flex flex-col justify-center items-center border border-gray-500">
          <span className="text-neutral-100">Nodes</span>
          <span className="font-semibold">{workflow.nodes.length}</span>
        </div>

        <div className="flex flex-col justify-center items-center border border-gray-500">
          <span className="text-neutral-100">Last updated</span>
          <span className="font-semibold">{workflow.lastupdated}</span>
        </div>

        <div className="flex flex-col justify-center items-center border border-gray-500">
          <span className="text-neutral-100">Created</span>
          <span className="font-semibold">{workflow.created}</span>
        </div>

        <div className="flex justify-center items-center border border-gray-500">
          <button className="cursor-pointer bg-gray-500 px-1">Open Editor</button>
        </div>
      </div>
      <div className="flex">
        <button className="cursor-pointer text-xl ml-auto" onClick={toggleMenu}>...</button>
      </div>
      {menuActive && <Menu id={workflow.id}/>}
    </div>
  );
};

export default WorkflowCard;
