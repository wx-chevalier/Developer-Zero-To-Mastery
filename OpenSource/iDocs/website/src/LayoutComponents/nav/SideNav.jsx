import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleExpandedState } from './redux';
import NavPanel from './NavPanel.jsx';
import NavItem from './NavItem.jsx';

const propTypes = {
  expandedState: PropTypes.object,
  pages: PropTypes.arrayOf(PropTypes.object),
  parents: PropTypes.arrayOf(PropTypes.object),
  toggleExpandedState: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { expandedState, parents, pages } = state.nav;
  return {
    expandedState,
    parents,
    pages
  };
}

function mapDispatchToProps(dispatch) {
  const dispatchers = {
    toggleExpandedState: bindActionCreators(toggleExpandedState, dispatch)
  };
  return dispatchers;
}

function renderChildren(children, pages) {
    return children
    .map(child => {
      if (child.hasChildren) {
        return renderParent(child, pages);
      }
      return (
        <NavItem
          isStubbed={ child.isStubbed }
          key={ child.path }
          path={ child.path }
          title={ child.title }
        />
      );
  });
}

function renderParent(parent, pages) {
  const childrenForParent = pages
    .filter(page => page.parent === parent.dashedName);

    const children = renderChildren(childrenForParent, pages);

  return (
    <NavPanel
      key={ parent.path }
      path={ parent.path }
      >
      { children }
    </NavPanel>
    );
}

function renderPanels(parents, pages) {
  if (!parents) {
    return 'No Parents Here';
  }
  return parents
    .map(parent => renderParent(parent, pages));
}

class SideNav extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { pathname } = this.context.router.route.location;
    const pathMap = pathname.slice(1).split('/').slice(0, -1)
      .reduce((accu, current, i, pathArray) => {
        const path = i !== 0 ?
          accu[pathArray[ i - 1 ]] + `/${current}` :
          `/${current}`;
        return {
          ...accu,
          [current]: path
        };
      }, {});

    Object.keys(pathMap)
      .map(key => pathMap[key])
      .map(path => {
        this.props.toggleExpandedState(path);
        return null;
      });
  }

  render() {
    const { expandedState, pages, parents } = this.props;
    const panels = renderPanels(parents, pages);
    return (
      <div className='sideNav' id='side-nav'>
        <PanelGroup>
          {
            (!parents || !expandedState) ?
            <NavPanel title={'No Parents Here'}/> :
            panels
          }
        </PanelGroup>
      </div>
    );
  }
}

SideNav.contextTypes = {
  router: PropTypes.object.isRequired
};
SideNav.displayName = 'SideNav';
SideNav.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
