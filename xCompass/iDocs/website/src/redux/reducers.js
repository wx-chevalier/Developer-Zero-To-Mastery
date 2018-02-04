import { combineReducers } from 'redux';

import { reducer as nav } from '../LayoutComponents/nav/redux';
import { reducer as search } from '../LayoutComponents/search/redux';

const rootReducer = combineReducers({
  nav,
  search
});

export default rootReducer;
