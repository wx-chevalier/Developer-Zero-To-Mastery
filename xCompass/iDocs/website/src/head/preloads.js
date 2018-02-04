import React from 'react';
import styleSheets from './styleSheets';

const preloads = styleSheets
  .map((styleSheet, i) => (
    <link
      as='style'
      href={ styleSheet.props.href }
      key={ i }
      rel='preload'
    />
    )
  );

export default preloads;
