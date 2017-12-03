import React from 'react';
import classNames from 'classnames';

const Back = ({card, flipped}) => {
  return (
    <div className={classNames('back', {hidden: !flipped})}>
      <p className='lead'>{card.translation}</p>
    </div>
  )
}

export default Back;
