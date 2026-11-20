import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../dashboardSlice";
import { useForm } from "react-hook-form";
import { createWorkflow } from "./workflowsSlice";


const createWorkflowEntity = (workflow) => {
  const currentDate = new Date();

  const formatedDate = currentDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return {
    id: crypto.randomUUID(),
    title: workflow.title,
    description: workflow.description,
    status: "Draft",
    nodes: [
      {
        id: "1",
        position: { x: 100, y: 50 },
        data: { label: "INPUT", description: "Input data JSON" },
      },
    ],
    edges: [],
    created: formatedDate,
    lastupdated: "-",
  };
};

const WorkflowForm = () => {
  const modalState = useSelector((state) => state.dashboard.isModalActive);
  const dispatch = useDispatch();

  const toggleForm = () => {
    dispatch(toggleModal(!modalState));
  };

  const {register, handleSubmit, formState:{errors}} = useForm();


  const onSubmit = (data) => {
    const title = data.title;
    const description = data.description;

    if (title) {
      const newWorkflow = createWorkflowEntity({title, description});
      dispatch(createWorkflow(newWorkflow));

      toggleForm();
    }
  }

  return (
    <dialog className="fixed inset-0 m-0 h-full w-full max-h-none max-w-none bg-black/70 text-white flex items-center justify-center p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-600 w-full max-w-md rounded-xl p-8 flex flex-col gap-6 shadow-2xl">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">Create Workflow</h2>
          <p className="text-sm text-gray-300">
            Add details to create your new workflow.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter workflow title"
            className="w-full rounded-lg bg-white text-black px-3 py-2.5 border border-gray-300 outline-none focus:ring-2 focus:ring-gray-400 transition"
            {...register("title", {required: "Title should not be empty!"})}
          />
          {errors.title && <span className="text-sm text-red-500">{errors.title.message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-sm" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            rows="3"
            placeholder="Describe your workflow..."
            className="w-full resize-none rounded-lg bg-white text-black px-3 py-2.5 border border-gray-300 outline-none focus:ring-2 focus:ring-gray-400 transition"
            {...register("description")}
          />
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={toggleForm}
            type="button"
            className="rounded-lg bg-gray-500 px-5 py-2.5 font-medium hover:bg-gray-400 transition cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-gray-500 px-5 py-2.5 font-semibold hover:bg-gray-400 transition cursor-pointer"
          >
            Create Workflow
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default WorkflowForm;
