import WorkflowCard from "./components/WorkflowCard";
import WorkflowForm from "./components/WorkflowForm";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "./dashboardSlice";

function Dashboard() {
  const modalState = useSelector(state => state.dashboard.isModalActive);
  const dispatch = useDispatch();

  const workflows = useSelector(state => state.workflows.workflows);

  const toggleForm = () => {
    dispatch(toggleModal(!modalState));  
  }
  

  return (
    <section className="p-5 relative min-h-screen flex flex-col bg-gray-900 text-white gap-2">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <section className="my-5 py-3 px-2 bg-gray-800">
        <button onClick={toggleForm} className="bg-gray-700 py-2 px-3 cursor-pointer">Create New</button>
      </section>
      <section className="grid gap-2 lg:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] p-2 border border-gray-500">
        {workflows.map((workflow) => <WorkflowCard key={workflow.id} workflow={workflow}/>)}
      </section>
      {modalState && <WorkflowForm/>}
    </section>
  )
}

export default Dashboard;