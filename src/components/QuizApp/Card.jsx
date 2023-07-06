const imageUri = process.env.PUBLIC_URL + "/images/"

export default function Card({quizLength, questionId, handleResult, data}) {
  return(
    <div className="quiz-card">
      <h2>Guess the Movie <span>{questionId + 1}/{quizLength}</span></h2>
      <img src={imageUri + data[questionId].image} alt="" />
      <ul>
        {
          
          data[questionId].options.map(
            (element, index) => {
              return (
                <li key={index} 
                onClick={ () => {handleResult(element.isCorrect)} }>{element.answer}</li>
              )
            }
          )
        }
      </ul>
    </div>
  )
  
}