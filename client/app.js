import React from 'react';
import AddItem from './components/AddItem';
import ShoppingList from './components/ShoppingList';
import Basket from './components/Basket';
import { connect } from 'react-redux';

const App = props => {
  const { items, basket } = props;
  let list, view;
  if (items.length > 0) {
    list = <ShoppingList items={items} />;
  } else {
    list = <p>Shopping list is empty</p>;
  }
  if (basket.length > 0) {
    view = <Basket />;
  }
  return (
    <div className="container">
      <AddItem />
      <div className="main">
        {list}
        {view}
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    items: state.items,
    basket: state.basket,
  };
};

export default connect(
  mapState,
  null
)(App);
