import React from 'react';
import classNames from 'classnames';

const Russian = ({card, flipped}) => {

  return (
    <div className={classNames('russian', {hidden: flipped})}>
      <p className='lead'>{card.word}</p>
      <p className='phonetic'>{card.phonetic}</p>
    </div>
  )
}

export default Russian;
