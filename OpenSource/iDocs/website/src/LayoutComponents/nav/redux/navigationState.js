import navData from '../../../navData.json';

export const pages = Object.keys(navData)
  .map(key => navData[key]);

export const parents = pages
  .filter(x => x.parent === 'pages');

export let expandedState = pages
  .reduce((accu, current) => {
    return {
      ...accu,
      [current.path]: false
    };
  }, {});
