import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';

const initialState = {
  isSearching: false,
  lastPage: '/',
  results: [],
  searchTerm: ''
};

export const types = createTypes(
  [
    'fetchSearchResults',
    'resetSearch',
    'updateLastPage',
    'updateSearchResults',
    'updateSearchTerm'
  ],
  'search'
);

export const fetchSearchResults = createAction(types.fetchSearchResults);
export const resetSearch = createAction(types.resetSearch);
export const updateLastPage = createAction(types.updateLastPage);
export const updateSearchResults = createAction(types.updateSearchResults);
export const updateSearchTerm = createAction(types.updateSearchTerm);

export const reducer = handleActions(
  {
    [types.fetchSearchResults]: state => ({
      ...state,
      isSearching: true
    }),
    [types.resetSearch]: state => ({
      ...state,
      results: [],
      searchTerm: ''
    }),
    [types.updateLastPage]: (state, { payload }) => ({
      ...state,
      lastPage: payload
    }),
    [types.updateSearchResults]: (state, { payload = [] }) => ({
      ...state,
      isSearching: false,
      results: payload
    }),
    [types.updateSearchTerm]: (state, { payload }) => ({
      ...state,
      searchTerm: payload
    })
  },
  initialState
);
