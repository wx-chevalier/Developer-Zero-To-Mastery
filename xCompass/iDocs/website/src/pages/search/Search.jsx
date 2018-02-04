import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';

import NoResults from '../../pageComponents/search/NoResults.jsx';
import NoSupport from '../../pageComponents/search/NoSupport.jsx';
import Results from '../../pageComponents/search/Results.jsx';
import ResultsSkeleton from '../../pageComponents/search/ResultsSkeleton.jsx';

import {
  resetSearch
} from '../../LayoutComponents/search/redux';

const propTypes = {
  isSearching: PropTypes.bool,
  lastPage: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string
};

function mapStateToProps(state) {
  return {
    isSearching: state.search.isSearching,
    lastPage: state.search.lastPage,
    results: state.search.results,
    searchTerm: state.search.searchTerm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetSearch
  }, dispatch);
}

function shouldShowResults(conditions) {
  const { lastPage, results, searchTerm } = conditions;
  return results.length ?
    <Results /> :
    <NoResults page={ lastPage } searchTerm={ searchTerm } />;
}

function SearchPage(props) {
  if (
    typeof window !== 'undefined' &&
    !('Promise' in window)
  ) {
    return <NoSupport />;
  }
  const { isSearching, lastPage, results, searchTerm } = props;
  return (
    <div>
      <Helmet>
        <title>Search | freeCodeCamp Guide</title>
      </Helmet>
      <h2 className='colourDarkGrey'>Search Results</h2>
      {
        (isSearching && !results.length) ?
          <ResultsSkeleton /> :
          shouldShowResults({ results, lastPage, searchTerm })
      }
    </div>
  );
}

SearchPage.displayName = 'SearchPage';
SearchPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
