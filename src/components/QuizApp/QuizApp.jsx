import { useState } from "react"
import data from "../../data/quiz.json"
import Card from "./Card";
import Result from "./Result";

import "./QuizApp.css"

const quizLength = data.length

export default function QuizApp() {

  const [questionId, setQuestionid] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleResult = () => {

  }

  const handleReset = () => {
    
  }

  return(
    <>
      {
        showResult
          ? <Result questionId={questionId} quizLength={quizLength} handleReset={handleReset}/>
          : <Card data={data} quizLength={quizLength} questionId={questionId} handleResult={handleResult}/>
      }      
    </>
  )
}