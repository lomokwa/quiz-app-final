import { useState } from "react"
import data from "../../data/movie.json"
import Card from "./Card";
import Result from "./Result";

import "./QuizApp.css"

const quizLength = data.length

export default function QuizApp() {

  const [questionId, setQuestionid] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleResult = (isCorrect) => {
    isCorrect && setScore(score + 1);

    const newQuestionId = questionId + 1;

    (newQuestionId < quizLength)
    ? setQuestionid(newQuestionId)
    : setShowResult(true)
  }

  const handleReset = () => {
    setQuestionid(0);
    setScore(0);
    setShowResult(false);
  }

  return(
    <>
      {
        showResult
          ? <Result score={score} quizLength={quizLength} handleReset={handleReset}/>
          : <Card data={data} quizLength={quizLength} questionId={questionId} handleResult={handleResult}/>
      }      
    </>
  )
}