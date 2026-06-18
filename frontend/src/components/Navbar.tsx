import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          onClick={() =>
            navigate("/dashboard")
          }
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          AI Mock Interview
        </h1>

        <div className="flex items-center gap-4">
          <span className="text-gray-600">
            {user.name}
          </span>

          <button
            onClick={() =>
              navigate("/dashboard")
            }
            className="px-4 py-2 rounded-lg hover:bg-slate-100"
          >
            Dashboard
          </button>

          <button
            onClick={() =>
              navigate(
                "/create-interview"
              )
            }
            className="px-4 py-2 rounded-lg hover:bg-slate-100"
          >
            Create
          </button>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;