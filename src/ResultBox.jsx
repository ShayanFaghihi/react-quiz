import React from "react";
import UI from "./UI";

const ResultBox = ({ finalScore, finalResults,refreshQuiz }) => {
  // Function to decode HTML entities
  const decodeHTMLEntities = (text) => {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(text, "text/html").body
      .textContent;
    return decodedString;
  };

  return (
    <UI>
      <ul className="text-white list-decimal p-4">
        <span className="mb-4 block text-center text-wheat">
          You have answered {finalScore} questions Right!
        </span>
        {finalResults.map((item,key) => {
          return (
            <li key={key} className="text-white mb-4">
              <span>
                <span className="text-wheat">Question: </span>{" "}
                {decodeHTMLEntities(item.question)}
              </span>{" "}
              <br />
              <span>
                <span className="text-wheat">Correct Answer: </span>{" "}
                {decodeHTMLEntities(item.correct_answer)}
              </span>
            </li>
          );
        })}
      <button onClick={refreshQuiz} className="answer-lists">Refresh</button>
      </ul>
    </UI>
  );
};

export default ResultBox;
