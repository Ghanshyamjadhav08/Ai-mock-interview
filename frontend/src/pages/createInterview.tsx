import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

const CreateInterview = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");

  const [skills, setSkills] = useState("");

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await api.post(
        "/interview/generate",
        {
          role,
          experience: Number(experience),
          skills: skills.split(",").map((skill) => skill.trim()),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      localStorage.setItem("questions", JSON.stringify(res.data.questions));

      navigate("/interview");
    } catch (error) {
      console.log(error);
      alert("Generation Failed");
    }
  };

  return (
    <>

       <Navbar/>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-2">Create Interview</h1>

          <p className="text-gray-500 mb-8">
            Generate a customized mock interview.
          </p>

          <form onSubmit={handleGenerate} className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">Job Role</label>

              <input
                type="text"
                placeholder="Frontend Developer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Experience (Years)
              </label>

              <input
                type="number"
                placeholder="2"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Skills</label>

              <input
                type="text"
                placeholder="React, Node.js, MongoDB"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Generate Interview
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateInterview;
