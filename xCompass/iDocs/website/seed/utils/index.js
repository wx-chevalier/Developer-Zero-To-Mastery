const titleify = require('./titleify');
const commonREs = require('./regEx');

const excludedDirs = [
  'search'
];

module.exports = {
  commonREs,
  excludedDirs,
  titleify
};
