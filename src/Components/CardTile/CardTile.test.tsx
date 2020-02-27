import React from 'react';
import CardTile from './CardTile';
import { shallow } from 'enzyme';

test('Renders tile', () => {
    const wrapper = shallow(<CardTile/>);
    let tile = wrapper.find("[data-test-id='card-tile']");
    expect(tile.length).toBe(1);
});