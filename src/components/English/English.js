import React from 'react';
import classNames from 'classnames';

const English = ({card, flipped}) => {
  return (
    <div className={classNames('english', {hidden: !flipped})}>
      <p className='lead'>{card.translation}</p>
      <p className='phonetic'>{card.phonetic}</p>
    </div>
  )
}

export default English;
