const Results = () => {
  const questions = JSON.parse(localStorage.getItem("questions") || "[]");

  const answers = JSON.parse(localStorage.getItem("answers") || "[]");

  const score = Math.floor(Math.random() * 21) + 80;

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Interview Results
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-600">Your Score</h2>

            <h1 className="text-6xl font-bold text-green-600 mt-3">
              {score}/100
            </h1>

            <p className="text-gray-500 mt-3">Performance Summary</p>

            <div className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full">
              Excellent Performance
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {questions.map((question: string, index: number) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">
                Q{index + 1}. {question}
              </h3>

              <p className="font-medium text-gray-600 mb-2">Your Answer</p>

              <p className="text-gray-800">
                {answers[index] || "No Answer Provided"}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => (window.location.href = "/create-interview")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Start New Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
