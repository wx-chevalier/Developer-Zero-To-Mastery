import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Media from 'react-bootstrap/lib/Media';
import FontAwesome from 'react-fontawesome';

import {
  resetSearch,
  updateSearchResults,
  updateSearchTerm
} from '../../LayoutComponents/search/redux';

const httpRE = /^https?/i;
const articleMetaRE = /^\-\-\-[\w\W]+?\-\-\-/;

const faNames = {
  challenge: 'free-code-camp',
  guides: 'file-text',
  youtube: 'youtube-play'
};

const propTypes = {
  resetSearch: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
  return {
    results: state.search.results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetSearch,
    updateSearchResults,
    updateSearchTerm
  }, dispatch);
}

function MediaWrapper(props) {
  const { url } = props;
  return httpRE.test(url) ?
    <a
      className='colourDarkGrey'
      href={ url }
      target='_blank'
      >
      { props.children }
    </a> :
    <Link className='colourDarkGrey' to={ url }>{ props.children }</Link>;
}

MediaWrapper.displayName = 'MediaWrapper';
MediaWrapper.propTypes = {
  children: PropTypes.any,
  url: PropTypes.string.isRequired
};

class Results extends PureComponent {
  constructor() {
    super();

    this.renderResultItems = this.renderResultItems.bind(this);
  }

  renderResultItems() {
    const { results } = this.props;
    return results.map((result, i) => {
      const { _index, _source: { body, description, title, url } } = result;
      const text = body ?
        body.replace(articleMetaRE, '').slice(0, 141) + '...' :
        description.slice(0, 141) + '...';
      return (
        <MediaWrapper key={ i } url={ url }>
          <Media>
            <Media.Left align='middle'>
              <FontAwesome
                className='resultIcon'
                name={ faNames[_index] ? faNames[_index] : '' }
                size='3x'
              />
            </Media.Left>
            <Media.Body>
              <Media.Heading>{ title }</Media.Heading>
              <p>{ text }</p>
            </Media.Body>
          </Media>
        </MediaWrapper>
      );
    });
  }

  render() {
    const { results = [] } = this.props;
    if (!results.length) {
      return null;
    }
    return (
      <div className='searchResults'>
        { this.renderResultItems() }
      </div>
    );
  }
}

Results.displayName = 'Results';
Results.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Results);
