import React, { Component } from 'react';
import Flashcard from '../Flashcard/Flashcard';
import Buttons from '../Buttons/Buttons';
import vocabulary from '../../static/vocabulary';
import Artyom from 'artyom.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { flipped: true, card: 0, currentLang: "English" };
  }

  flipCard = () => {
    this.setState({flipped: !this.state.flipped});
  }

  nextCard = () => {
    this.setState({flipped: this.state.currentLang === "English", card: this.state.card === vocabulary.length - 1 ? 0 : this.state.card + 1});
  }

  sayWord = () => {
    let artyom = new Artyom();
    artyom.say(vocabulary[this.state.card].word, {
      lang:"ru-RU"
    });
  }

  render() {
    const { card, flipped } = this.state;

    return (
      <div className="App">
        <div className="starting-language-menu">
          <label>Front Side </label>
          <select onChange={e => this.setState({currentLang: e.target.value, flipped: e.target.value === "English"})}>
            <option>English</option>
            <option>Russian</option>
          </select>
        </div>
        <Flashcard card={card} flipCard={this.flipCard} flipped={flipped} />
        <Buttons sayWord={this.sayWord} flipCard={this.flipCard} nextCard={this.nextCard}/>
      </div>
    );
  }
}

export default App;
