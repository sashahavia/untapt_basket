import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import ShoppingList from './ShoppingList';
import ListItem from './ListItem';

const adapter = new Adapter();
enzyme.configure({ adapter });

// create any initial state needed
const initialState = {};
// here it is possible to pass in any middleware if needed into //configureStore
const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Shopping List', () => {
  let wrapper, wrapper2;
  let store;
  let items;

  beforeEach(() => {
    items = [
      {
        name: 'Milk',
        qty: 1,
      },
      {
        name: 'Bread',
        qty: 1,
      },
    ];
    store = mockStore(initialState);
    wrapper = shallow(<ShoppingList store={store} items={items} />).dive();
    wrapper2 = mount(<ShoppingList store={store} items={items} />);
  });

  afterEach(() => {
    store.clearActions();
  });

  it('renders the heading in an h3', () => {
    expect(wrapper.find('h3').text()).to.be.equal('Shopping List');
  });

  it('should render a ul element', () => {
    expect(wrapper.find('ul').getElement()).to.exist; // eslint-disable-line no-unused-expressions
  });

  it('renderes ListItem component', () => {
    expect(wrapper).contains(ListItem);
  });

  it('renders div with class shopping list', () => {
    expect(wrapper.exists('.shopping-list')).to.equal(true);
  });

  it('renders list-items', () => {
    // console.log(wrapper2.debug());
    // Expect the wrapper object to be defined
    expect(wrapper2.find('button')).to.have.lengthOf(items.length);
    expect(wrapper2.find('li')).to.have.lengthOf(items.length);
  });
});
