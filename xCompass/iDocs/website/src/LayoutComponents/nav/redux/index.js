import { createTypes } from 'redux-create-types';
import { createAction, handleAction } from 'redux-actions';

import { expandedState, pages, parents } from './navigationState';

const initialState = {
  expandedState,
  pages,
  parents
};

export const types = createTypes(
  [
    'toggleExpandedState'
  ],
  'nav'
);

export const toggleExpandedState = createAction(types.toggleExpandedState);

export const reducer = handleAction(
  types.toggleExpandedState,
  (state, { payload: path }) => ({
      ...state,
      expandedState: {
        ...state.expandedState,
        [path]: !state.expandedState[path]
      }
    }),
  initialState
);
