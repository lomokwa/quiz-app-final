export default function Result({quizLength, score, handleReset}) {
  return(
    <div className="quiz-card">
      <h2>You got {score} out of {quizLength} questions correct. </h2>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}