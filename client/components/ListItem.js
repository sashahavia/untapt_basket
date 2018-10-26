import React from 'react';

const ListItem = props => {
  const { item, handleClick, id } = props;
  return (
    <li>
      {item.qty} {item.name}
      <button
        type="button"
        className="btn-add"
        onClick={() => handleClick(id, item)}
      >
        Add to Basket
      </button>
    </li>
  );
};

export default ListItem;
