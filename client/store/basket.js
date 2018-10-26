/**
 * ACTION TYPES
 */

const ADD_TO_BASKET = 'ADD_TO_BASKET';
const CLEAR_BASKET = 'CLEAR_BASKET';
/**
 * ACTION CREATORS
 */

export const addToBasket = item => ({
  type: ADD_TO_BASKET,
  item,
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});

/**
 * REDUCER
 */
const basketReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      console.log('in Basket reducer action', action);
      return [...state, action.item];
    case CLEAR_BASKET:
      return [];
    default:
      return state;
  }
};

export default basketReducer;
