import { combineReducers } from 'redux';
import itemsReducer from './items';
import basketReducer from './basket';

const rootReducer = combineReducers({
  items: itemsReducer,
  basket: basketReducer,
});

export default rootReducer;
