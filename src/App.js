import React from 'react';
import './App.css';
import Game from './Game.js';
import data from './data.js';
import QuestionsContainer from './QuestionsContainer.js'

class App extends React.Component {
  myScore = (score) => (
    score+=1
  )

  render(){
  return (
    <div className="App">
      <p>Score: {this.myScore(0)}</p>
      <Game score={data.questions}/>
      <QuestionsContainer score={this.myScore()} question={data.questions} />
      <input placeholder="Name"></input>
      <button>Submit</button>
    </div>
  );
  }
}
export default App;
