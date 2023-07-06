export default function Card({quizLength, questionId, data}) {
  return(
    <div className="quiz-card">
      <p>{questionId + 1}/{quizLength}</p>
      <h2>{ data[questionId].question }</h2>
      <ul>
        {
          
          data[questionId].options.map(
            (element, index) => {
              return (
                <li key={index}>{element.answer}</li>
              )
            }
          )
        }
      </ul>
    </div>
  )
  
}