import React, { useState } from "react";

/* ----------------------------------------
   Sample quiz data (safe, valid JS)
---------------------------------------- */
const questions = [
  {
    question: "Which cameras are supported by FSX Play?",
    answers: [
      "High-resolution driver cameras",
      "Professional BlackFly analysis cameras",
      "Plug-and-Play cameras only",
      "Any USB camera will do",
    ],
    correct: 2,
    explanation:
      "FSX Play supports Plug-and-Play cameras only. The FSX Play video feature is for recreational analysis only.",
  },
  {
    question: "Where can you download the latest version of FSX Play?",
    answers: [
      "FSX Play auto updates",
      "It doesn't need updating",
      "The Support website online",
      "FSX Live account online",
    ],
    correct: 2,
    explanation:
      "The latest version can be downloaded from the Foresight Sports support website.",
  },
];

/* ----------------------------------------
   Button component (UPGRADED – 3D / Physical)
---------------------------------------- */
function QuizButton({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        w-full px-5 py-4 rounded-2xl
        bg-gradient-to-b from-gray-700 to-gray-900
        text-white font-semibold
        shadow-[0_6px_0_rgba(0,0,0,0.7),0_12px_24px_rgba(0,0,0,0.6)]
        transition-all duration-150
        hover:from-gray-600 hover:to-gray-800
        hover:shadow-[0_8px_0_rgba(0,0,0,0.75),0_16px_30px_rgba(0,0,0,0.65)]
        active:translate-y-2
        active:shadow-[0_3px_0_rgba(0,0,0,0.7),0_6px_14px_rgba(0,0,0,0.6)]
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-white/25
      "
    >
      {children}
    </button>
  );
}


/* ----------------------------------------
   Main App
---------------------------------------- */
export default function ForesightLearningApp() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const q = questions[current];

  const handleAnswer = (index) => {
    setSelected(index);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowExplanation(false);
    setCurrent((prev) => (prev + 1 < questions.length ? prev + 1 : prev));
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/pexels-kindelmedia-6573882.jpg)",
          filter: "blur(8px) brightness(0.3)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto p-6">
        {/* Header */}
        <h1
          className="
            text-3xl md:text-4xl font-extrabold text-center mb-8
            tracking-wide
          "
          style={{
            textShadow: "0 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          Foresight Sports Europe Academy
        </h1>

        {/* Card */}
        <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-6">{q.question}</h2>

          <div className="space-y-3">
            {q.answers.map((answer, index) => (
              <QuizButton
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showExplanation}
              >
                {answer}
              </QuizButton>
            ))}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mt-6 p-4 rounded-xl bg-gray-900 border border-white/10">
              <p className="mb-2 font-semibold">
                {selected === q.correct ? "✅ Correct" : "❌ Incorrect"}
              </p>
              <p className="text-sm text-gray-300">{q.explanation}</p>

              <button
                onClick={nextQuestion}
                className="
                  mt-4 px-4 py-2 rounded-lg
                  bg-white text-black font-semibold
                  hover:shadow-md transition
                "
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

