import React, { Component } from 'react';
import Flashcard from '../Flashcard/Flashcard';
import Button from '../Button/Button';
import vocabulary from '../../static/vocabulary';
import Artyom from 'artyom.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { flipped: false, card: 0, frontSide: "Russian"};
  }

  flipCard = () => {
    this.setState({flipped: !this.state.flipped});
  }

  nextCard = () => {
    this.setState({flipped: false, card: this.state.card === vocabulary.length - 1 ? 0 : this.state.card + 1});
  }

  sayWord = () => {
    let artyom = new Artyom();
    artyom.say(vocabulary[this.state.card].word, {
      lang:"ru-RU"
    });
  }

  render() {
    const { card, flipped, currentLang } = this.state;

    return (
      <div className="App">
        <div class="absolute-top-right">
          <label>Front Side</label>
          <select>
            <option>Russian</option>
            <option>English</option>
          </select>
        </div>
        <Flashcard card={card} flipCard={this.flipCard} flipped={flipped} />
        <div className="flex-buttons">
          <Button classes="btn orange flipCard" command={this.flipCard} text="Flip"/>
          <Button classes="btn nextCard" command={this.nextCard} text="Next"/>
        </div>
        {/* <Buttons sayWord={this.sayWord} flipCard={this.flipCard} nextCard={this.nextCard}/> */}
      </div>
    );
  }
}

export default App;
