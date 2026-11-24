import { useState } from "react";
import WorkflowCard from "../features/workflow/WorkflowCard";
import WorkflowForm from "../features/workflow/WorkflowForm";
import { useSelector } from "react-redux";

function Dashboard() {
  const workflows = useSelector(state => state.workflows.workflows);
  
  const [modalActive, setModalActive] = useState(false);

  const toggleForm = () => {
    setModalActive(!modalActive);   
  }
  

  return (
    <section className="h-full p-5 relative flex flex-col bg-gray-900 text-white gap-2">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <section className="my-5 py-3 px-2 bg-gray-800">
        <button onClick={toggleForm} className="bg-gray-700 py-2 px-3 cursor-pointer">Create New</button>
      </section>
      <section className="grid gap-2 lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] p-2 border border-gray-500">
        {workflows?.length <= 0 ? <div className="flex justify-center items-center text-gray-500 italic">No Workflows.</div> :workflows.map((workflow) => <WorkflowCard key={workflow.id} workflow={workflow}/>)}
      </section>
      {modalActive && <WorkflowForm toggleForm={toggleForm}/>}
    </section>
  )
}

export default Dashboard;