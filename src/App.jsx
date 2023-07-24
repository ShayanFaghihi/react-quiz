import React, { useEffect, useState } from "react";
import QuestionBox from "./QuestionBox";
import ResultBox from "./ResultBox";

const QUESTIONS_COUNT = 5;
const APIAddress = `https://opentdb.com/api.php?amount=${QUESTIONS_COUNT}&category=9&difficulty=easy&type=multiple`;

function App() {
  const [quiz, setQuiz] = useState([]);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);

  async function getData() {
    try {
      const data = await fetch(APIAddress);
      const response = await data.json();
      setQuiz(response.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
    return
  }, []);

  const getResultHandler = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setCounter((prev) => prev + 1);
    } else {
      setCounter((prev) => prev + 1);
    }
  };

  // Refresh Quiz by clering the states
  const refreshQuizHandler = () => {
    setCounter(0);
    setScore(0);
    getData();
  }


  return counter < QUESTIONS_COUNT ? (
    <QuestionBox
      data={quiz[counter]}
      nextQuestion={getResultHandler}
      questionCount={counter + 1}
    />
  ) : (
    <ResultBox finalScore = {score}  finalResults ={quiz} refreshQuiz={refreshQuizHandler}/>
  );
}

export default App;
