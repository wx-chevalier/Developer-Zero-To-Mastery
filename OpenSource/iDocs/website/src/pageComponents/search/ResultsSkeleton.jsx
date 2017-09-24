import React from 'react';
import Media from 'react-bootstrap/lib/Media';

function ResultsSkeleton() {
  // pad the skeleton out for where there would be text
  const text = new Array(145).join('x ');
  const title = new Array(16).join('x');
  // the contructor method does not work for this
  const results = [1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => {
    return (
      <Media key={ i }>
        <Media.Left align='middle'>
          <div className='iconSkeleton skeleton' />
        </Media.Left>
        <Media.Body>
          <Media.Heading
            className='textSkeleton skeleton'
            >
            { title }
          </Media.Heading>
          <p className='textSkeleton skeleton'>{ text }</p>
        </Media.Body>
      </Media>
    );
  });

  return (
    <div className='searchResults'>
      { results }
    </div>
  );
}

export default ResultsSkeleton;
