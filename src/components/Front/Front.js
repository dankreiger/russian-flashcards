import React from 'react';
import classNames from 'classnames';

const Front = ({card, flipped}) => {
  return (
    <div className={classNames('front', {hidden: flipped})}>
      <p className='lead'>{card.translation}</p>
    </div>
  )
}

export default Front;
