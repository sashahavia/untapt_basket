import React from 'react';

const ShoppingList = props => {
  const { items } = props;
  console.log('Shopping List', items);
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.name}>
            <p>
              {item.name} : {item.qty}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
