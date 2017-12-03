import React, { Component } from 'react';

import vocabulary from '../../static/vocabulary';
import classNames from 'classnames';

import Russian from '../Russian/Russian';
import English from '../English/English';
import './Flashcard.css'

class Flashcard extends Component {
  constructor(props) {
    super(props);

    this.state = { newCard: false }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({newCard: this.props.card !== nextProps.card})
  }

  render() {
    const { card, flipped, flipCard } = this.props;
    const { newCard } = this.state;

    return (
      <div className={classNames('Flashcard', {newCard, flipped})} onClick={flipCard}>
        <Russian card={vocabulary[card]} flipped={flipped} />
        <English card={vocabulary[card]} flipped={flipped} />
      </div>
    )
  }
}

export default Flashcard;
