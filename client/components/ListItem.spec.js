import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListItem from './ListItem';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('List item', () => {
  let listItem;
  let item = {
    name: 'Milk',
    qty: 1,
  };

  beforeEach(() => {
    listItem = shallow(<ListItem item={item} />);
  });

  it('renders the heading in an h3', () => {
    expect(listItem.find('li').text()).to.be.equal('1 MilkAdd to Basket');
  });
});
