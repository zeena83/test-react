import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders input-name', () => {
  let wrapper = mount(<Form/>);
  wrapper.find({className:'name'})       
  });

test('renders input-email', () => {
   let wrapper = mount(<Form/>); 
   wrapper.find({className:'email'})
  
	
});
