import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const propTypes = {
  isStubbed: PropTypes.bool,
  path: PropTypes.string,
  router: PropTypes.object,
  title: PropTypes.string
};

function NavItem(props) {
  const { isStubbed, path, title } = props;
  return (
    <li role='presentation'>
      <Link role='presentation' to={ path }>
        <span
          className={
            'navItemTitle' +
            ( isStubbed ? ' stubbed' : '' )
          }
          >
          { title }
        </span>
      </Link>
    </li>
  );
}

NavItem.displayName = 'NavItem';
NavItem.propTypes = propTypes;

export default NavItem;
