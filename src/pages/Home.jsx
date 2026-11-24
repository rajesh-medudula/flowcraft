import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("dashboard");
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center gap-10">
      <div>
        <h1 className="text-5xl font-bold">FLOW CRAFT</h1>
        <em>Visual workflow</em>
      </div>
      <div>
        <button className="py-2 px-3 cursor-pointer bg-gray-500" onClick={handleNav}>
          Build workflow
        </button>
      </div>
    </section>
  );
};

export default Home;
