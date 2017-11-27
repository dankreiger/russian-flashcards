import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


import App from './App';

describe('<App />', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('renders correctly', () => {
    expect(toJson(app)).toMatchSnapshot();
  });

  it('renders a <Flashcard /> component', () => {
    expect(app.find('Flashcard').exists()).toBe(true);
  });
});
