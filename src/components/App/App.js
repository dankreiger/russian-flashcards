import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Flashcard from '../Flashcard/Flashcard';
import Buttons from '../Buttons/Buttons';
import Artyom from 'artyom.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false, card: 0, currentLang: "English" };

    this.vocabulary = this.props.vocabulary;
  }

  flipCard = () => {
    this.setState({flipped: !this.state.flipped});
  }

  nextCard = () => {
    this.setState({flipped: this.state.currentLang === "Russian", card: this.state.card === this.vocabulary.length - 1 ? 0 : this.state.card + 1});
  }

  sayWord = () => {
    let artyom = new Artyom();
    artyom.say(this.vocabulary[this.state.card].word, {
      lang:"ru-RU"
    });
  }

  render() {
    const { card, flipped } = this.state;

    return (
      <div className="App">
        <div className="links-container">
          <Link to="/">Back</Link>
          <div className="starting-language-menu">
            <label>Front Side </label>
            <select onChange={e => this.setState({currentLang: e.target.value, flipped: e.target.value === "Russian"})}>
              <option>English</option>
              <option>Russian</option>
            </select>
          </div>
        </div>
        <Flashcard card={this.vocabulary[card]} flipCard={this.flipCard} flipped={flipped} />
        <Buttons card={this.vocabulary[card]} sayWord={this.sayWord} flipCard={this.flipCard} nextCard={this.nextCard}/>
      </div>
    );
  }
}

export default App;
