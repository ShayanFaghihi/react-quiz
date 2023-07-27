import React, { useEffect, useState } from "react";
import UI from "./UI";
import Loader from "./Loader";

const QuestionBox = ({ data, nextQuestion, questionCount }) => {
  const [quiz, setQuiz] = useState({ question: "", answers: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data && data.incorrect_answers) {
      const incorrectAnswers = data.incorrect_answers.map((item) => ({
        title: item,
        isCorrect: false,
      }));
      setQuiz({
        question: data.question,
        answers: [
          ...incorrectAnswers,
          { title: data.correct_answer, isCorrect: true },
        ],
      });
      setIsLoading(false)
    }
  }, [data]);

  // Function to decode HTML entities
  const decodeHTMLEntities = (text) => {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(text, "text/html").body
      .textContent;
    return decodedString;
  };

  // Function to shuffle the array using Fisher-Yates Shuffle algorithm for changing the answers array order
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  };

  return (
    <UI>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex-1 mb-5">
            <h2 className="text-3xl text-wheat mb-4">
              Question {questionCount}/<span className="text-sm">5</span>
            </h2>
            <p className="text-wheat text-md tracking-wide leading-6">
              {decodeHTMLEntities(quiz.question)}
            </p>
          </div>
          <div className="flex-1">
            <ul>
              {shuffleArray(quiz.answers).map((answer, key) => (
                <li
                  key={key}
                  className="answer-lists"
                  onClick={() => nextQuestion(answer.isCorrect)}
                >
                  {decodeHTMLEntities(answer.title)}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </UI>
  );
};

export default QuestionBox;
