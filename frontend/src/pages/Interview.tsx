import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

const Interview = () => {
  const navigate = useNavigate();

  const questions = JSON.parse(localStorage.getItem("questions") || "[]");

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answer, setAnswer] = useState("");

  const [answers, setAnswers] = useState<string[]>([]);

  const nextQuestion = () => {
    const updatedAnswers = [...answers, answer];

    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);

      setAnswer("");
    } else {
      localStorage.setItem("answers", JSON.stringify(updatedAnswers));

      navigate("/results");
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-slate-100 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Mock Interview</h1>

              <span className="text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-semibold">
                {questions[currentQuestion]}
              </h2>
            </div>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Write your answer here..."
              className="w-full border border-gray-300 rounded-xl p-4 min-h-[220px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-end mt-6">
              <button
                onClick={nextQuestion}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                {currentQuestion === questions.length - 1
                  ? "Finish Interview"
                  : "Next Question"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interview;
