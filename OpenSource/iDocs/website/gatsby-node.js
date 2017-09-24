const path = require('path');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const { dir, name } = path.parse(fileNode.relativePath);
    if (name !== 'index' && dir !== '') {
      slug = `/${dir}/${name}/`;
    } else if (dir === '') {
      slug = `/${name}/`;
    } else {
      slug = `/${dir}/`;
    }

    // Add slug as a field on the node.
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const Article = path.resolve('src/templates/Article.jsx');
    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(
        `
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create article pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug,
            component: Article,
            context: {
              slug: edge.node.fields.slug
            }
          });
        });

        return;
      })
    );
  });
};
