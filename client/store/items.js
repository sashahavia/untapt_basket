/**
 * ACTION TYPES
 */

const ADD_ITEMS = 'ADD_ITEMS';
/**
 * ACTION CREATORS
 */

export const addItems = item => ({
  type: ADD_ITEMS,
  item,
});

/**
 * REDUCER
 */
const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEMS:
      console.log('in reducer action', action.item);
      return [...state, action.item];
    default:
      return state;
  }
};

export default itemsReducer;
