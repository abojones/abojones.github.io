import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('Renders App', () => {
  const wrapper = shallow(<App/>);
  let test = wrapper.find("[data-test-id='app']");
  expect(test.length).toBe(1);
});
