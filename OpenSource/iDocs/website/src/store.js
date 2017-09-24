import { createEpic } from 'redux-epic';
import { createStore as reduxCreateStore, applyMiddleware } from 'redux';

import searchEpic from './LayoutComponents/search/redux/searchEpic';

import rootReducer from './redux/reducers';

const epicMiddleware = createEpic(searchEpic);

const createStore = () => reduxCreateStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

export default createStore;
