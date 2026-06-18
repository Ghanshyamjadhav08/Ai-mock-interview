exports.generateQuestions = async (
  req,
  res
) => {
  try {
    console.log("Generate API Hit");

    const questions = [
      "Explain Virtual DOM",
      "What is useMemo?",
      "Difference between let and var?",
      "What is Event Loop?",
      "What is JWT?"
    ];

    console.log("Sending Response");

    res.status(200).json({
      success: true,
      questions,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};



