import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (

 <>
          <Navbar/>
    <div className="min-h-screen bg-slate-100">
        
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-bold">
            AI Mock Interview
          </h1>

          <p className="mt-2 text-gray-600">
            Welcome, {user.name}
          </p>

          <button
            onClick={() =>
              navigate(
                "/create-interview"
              )
            }
            className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Create Interview
          </button>

          <button
            onClick={logout}
            className="ml-4 bg-red-500 text-white px-5 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
 </>
  );
};

export default Dashboard;