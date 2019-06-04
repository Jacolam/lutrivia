import React from 'react';
import './App.css';
import Question from './Question.js'

class QuestionsContainer extends React.Component{

  allQuestions = (questions)=>(
    questions.map(q=>(
      <Question score={this.props.score} text={q.text} answer={q.answer} />
    ))
  )
  render(){
  return (
    <div>
      <ul>
        {this.allQuestions(this.props.question)}
      </ul>
    </div>
  );
  }
}

export default QuestionsContainer;
