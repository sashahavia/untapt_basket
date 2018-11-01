/**
 * ACTION TYPES
 */

const ADD_ITEMS = 'ADD_ITEMS';
const REMOVE_ITEM = 'REMOVE_ITEM';
/**
 * ACTION CREATORS
 */

export const addItems = item => ({
  type: ADD_ITEMS,
  item,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
});

/**
 * REDUCER
 */
const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEMS:
      // console.log('in reducer action', action.item);
      return [...state, action.item];
    case REMOVE_ITEM:
      return [...state.slice(0, action.id), ...state.slice(action.id + 1)];
    default:
      return state;
  }
};

export default itemsReducer;
