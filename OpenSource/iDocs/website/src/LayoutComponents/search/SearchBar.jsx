import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from 'react-bootstrap/lib/Navbar';
import FormControl from 'react-bootstrap/lib/FormControl';

import {
  fetchSearchResults,
  updateLastPage,
  updateSearchResults,
  updateSearchTerm
} from './redux';

const propTypes = {
  fetchSearchResults: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string,
  updateLastPage: PropTypes.func.isRequired,
  updateSearchResults: PropTypes.func.isRequired,
  updateSearchTerm: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    results: state.search.results,
    searchTerm: state.search.searchTerm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchSearchResults,
    updateLastPage,
    updateSearchResults,
    updateSearchTerm
  }, dispatch);
}

class SearchBar extends PureComponent {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const {
      updateLastPage,
      updateSearchResults,
      updateSearchTerm
    } = this.props;
    const { push } = this.context.router.history;
    const { pathname } = this.context.router.history.location;
    const { value } = e.target;

    if (pathname !== '/search' && value.length > 2) {
      updateLastPage(pathname);
      push('/search');
    }
    if (value.length <= 2) {
      updateSearchResults([]);
    }
    updateSearchTerm(value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { fetchSearchResults } = this.props;
    fetchSearchResults();
  }

  render() {
    const {
      searchTerm
    } = this.props;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <Navbar.Form className='formContainer'>
            <FormControl
              className='input'
              onChange={ this.handleChange }
              placeholder='&#xf002; What would you like to know?'
              type='text'
              value={ searchTerm }
            />
          </Navbar.Form>
        </form>
      </div>
    );
  }
}

SearchBar.contextTypes = {
    router: PropTypes.object.isRequired
};
SearchBar.displayName = 'SearchBar';
SearchBar.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
