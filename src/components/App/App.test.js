import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import vocabulary from '../../static/vocabulary';


import App from './App';

describe('<App />', () => {
  let app;
  beforeEach(() => {
    app = mount(
      <MemoryRouter initialEntries={[ '/', '/basics' ]} >
        <App vocabulary={vocabulary.basics}/>
      </MemoryRouter>
    );
  });

  it('renders a <Flashcard /> component', () => {
    expect(app.find('Flashcard').exists()).toBe(true);
  });

  // // learn how to implement these with react router - <MemoryRouter /> causes them to fail


  // it('renders correctly', () => {
  //   expect(toJson(app)).toMatchSnapshot();
  // });


  // it('renders the first card unflipped with the correct text', () => {
  //   expect(app.state().flipped).toBe(false);
  //   expect(app.state().card).toEqual(0);
  //
  //   expect(app.find('.front').hasClass('hidden')).toBe(false);
  //   expect(app.find('.back').hasClass('hidden')).toBe(true);
  //
  //   expect(app.find('.front').find('.lead').text()).toEqual('Yes');
  //
  // })

  // it('flips the flashcard on button click', () => {
  //   app.find('.flipCard').simulate('click');
  //
  //   expect(app.find('.Flashcard').hasClass('flipped')).toBe(true);
  //
  //   expect(app.state().flipped).toBe(true);
  //   expect(app.state().card).toEqual(0);
  //
  //
  //   expect(app.find('.front').hasClass('hidden')).toBe(true);
  //   expect(app.find('.back').hasClass('hidden')).toBe(false);
  //
  //   expect(app.find('.back').find('.lead').text()).toEqual('Да');
  //   expect(app.find('.back').find('.phonetic').text()).toEqual('[dá]');
  //
  // });
  //
  // it('goes to the next card on button click', () => {
  //   app.find('.nextCard').simulate('click');
  //
  //   expect(app.find('.Flashcard').hasClass('flipped')).toBe(false);
  //
  //   expect(app.state().flipped).toBe(false);
  //   expect(app.state().card).toEqual(1);
  //
  //
  //   expect(app.find('.front').hasClass('hidden')).toBe(false);
  //   expect(app.find('.back').hasClass('hidden')).toBe(true);
  //
  //   expect(app.find('.front').find('.lead').text()).toEqual('No');
  //
  // });
  //
  // it('goes to the next card and flips after clicking buttons', () => {
  //   app.find('.nextCard').simulate('click');
  //
  //   app.find('.flipCard').simulate('click');
  //
  //   expect(app.find('.Flashcard').hasClass('flipped')).toBe(true);
  //
  //   expect(app.state().flipped).toBe(true);
  //   expect(app.state().card).toEqual(1);
  //
  //
  //   expect(app.find('.front').hasClass('hidden')).toBe(true);
  //   expect(app.find('.back').hasClass('hidden')).toBe(false);
  //
  //   expect(app.find('.back').find('.lead').text()).toEqual('Нет');
  //   expect(app.find('.back').find('.phonetic').text()).toEqual("[n'ét]");
  //
  // });
});
