import React from 'react';
import './App.css';
import Question from './Question.js'

export default class QuestionsContainer extends React.Component{

  state = {
    score: 0
  }

  allQuestions = (questions)=>(
    questions.map(q=>(
      <Question score={this.state.score} text={q.text} answer={q.answer} />
    ))
  )

  render(){
    return (
      <div>
        <p>Score: {this.state.score}</p>
        <ul>
          {this.allQuestions(this.props.question).slice(0,5)}
        </ul>
      </div>
    );
  }
}
