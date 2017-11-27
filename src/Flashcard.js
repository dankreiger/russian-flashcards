import React, { Component } from 'react';
import vocabulary from './vocabulary';
import classNames from 'classnames';
import './Flashcard.css'

class Flashcard extends Component {
  constructor() {
    super();
    this.state = { flipped: false }
  }

  handleClick = () => {
    this.setState({flipped: !this.state.flipped})
  }

  render() {
    return (
      <div className={classNames('Flashcard', {answer: this.state.flipped})} onClick={this.handleClick}>
        <div className={classNames('front', {hidden: this.state.flipped})}>
          <p className='lead'>{vocabulary[0].word}</p>
          <p>{vocabulary[0].phonetic}</p>
        </div>
        <div className={classNames('back', {hidden: !this.state.flipped})}>
          <p className='lead'>{vocabulary[0].translation}</p>
          <p>{vocabulary[0].phonetic}</p>
        </div>

      </div>
    )
  }
}

export default Flashcard;
