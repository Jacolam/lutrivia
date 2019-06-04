import React from 'react';
import './App.css';
import Game from './Game.js'
import App from './App.js'

class Question extends React.Component{

  addScore = (answer) => (
    console.log((this.props.answer === answer) ? 1 : 0)
  )

  render(){
    console.log(this.props.score)
    return (
      <div>
        {this.props.text}
        <p></p>
        <button onClick={()=>this.addScore(true)}>true</button>
        <button onClick={()=>this.addScore(false)}>false</button>
      </div>
    )
  }
}

export default Question;
