import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { addToBasket } from '../store/basket';
import { removeItem } from '../store/items';

const ShoppingList = props => {
  const { items } = props;
  // console.log('Shopping List', items);
  return (
    <div className="shopping-list">
      <h3>Shopping List</h3>
      <ul>
        {items.map((item, idx) => (
          <ListItem
            key={idx}
            item={item}
            handleClick={props.handleClick}
            id={idx}
          />
        ))}
      </ul>
    </div>
  );
};

const mapDispatch = dispatch => {
  return {
    handleClick(id, item) {
      dispatch(addToBasket(item));
      dispatch(removeItem(id));
    },
  };
};

export default connect(
  null,
  mapDispatch
)(ShoppingList);
