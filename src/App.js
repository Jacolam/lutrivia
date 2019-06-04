import React from 'react';
import './App.css';
import data from './data.js';
import QuestionsContainer from './QuestionsContainer.js'

export default class App extends React.Component {

  state = {
    inProgress: false
  }

  newGame = (e) => {
    this.setState({
      inProgress: true
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Lutrivia</h1>
        {
          !this.state.inProgress ? <button onClick={this.newGame}>New Game</button> : null
        }
        {
          this.state.inProgress ? <QuestionsContainer question={data.questions} /> : null
        }
        {
          this.state.inProgress ? <form><input placeholder="Name" /><input type="submit"/></form> : null
        }
      </div>
    );
  }
}
