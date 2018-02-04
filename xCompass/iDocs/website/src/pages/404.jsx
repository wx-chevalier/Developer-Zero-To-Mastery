import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

function FourOhFour() {
  return (
    <div className='flexWrapper'>
      <Helmet>
        <title>404 - Page Not Found | freeCodeCamp Guide</title>
      </Helmet>
      <div className='verticalAlign'>
        <h3>404 - Page not found</h3>
        <p>The page you were looking for could not be found.</p>
        <p>You can try searching for something, or</p>
        <Link to={ '/' }>
          <Button
            bsSize='large'
            className='button'
            >
            Go to the homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}

FourOhFour.displayName = 'FourOhFour';

export default FourOhFour;
