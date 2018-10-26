import React from 'react';
import { connect } from 'react-redux';
import { clearBasket } from '../store/basket';

const Basket = props => {
  const { basket } = props;
  return (
    <div className="basket">
      <h3>Basket</h3>
      <ul>
        {basket.map((item, idx) => (
          <li key={idx}>
            {item.qty} {item.name}
          </li>
        ))}
      </ul>
      <button type="button" className="btn-clear" onClick={props.handleClick}>
        Clear Basket
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    basket: state.basket,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(clearBasket());
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(Basket);
