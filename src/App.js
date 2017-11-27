import React, { Component } from 'react';
import Flashcard from './Flashcard';
import vocabulary from './vocabulary';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { flipped: false, card: 0 };
  }

  flipCard = () => {
    this.setState({flipped: !this.state.flipped});
  }

  nextCard = () => {
    this.setState({flipped: false, card: this.state.card === vocabulary.length - 1 ? 0 : this.state.card + 1});
  }

  render() {
    const { card, flipped } = this.state;

    return (
      <div className="App">
        <Flashcard card={card} flipped={flipped} />
        <div className="flex-buttons">
          <button className="btn blue" onClick={this.flipCard}>
            <span>Flip</span>
          </button>
          <button className="btn" onClick={this.nextCard}>
            <span>Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
