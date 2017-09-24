const fse = require('fs-extra');
const Rx = require('rx');

const { Observable } = Rx;
const topLevel = 'src/pages';
const navData = {};

const { commonREs, excludedDirs } = require('./utils');

const { isAFileRE, isAStubRE, metaRE, shouldBeIgnoredRE } = commonREs;

function readDir(dir) {
  return fse.readdirSync(`${process.cwd()}/${dir}/`)
  .filter(item => !isAFileRE.test(item))
  .filter(dir => !excludedDirs.includes(dir))
  .filter(file => !shouldBeIgnoredRE.test(file));
}

function getPageTitle(content) {
  // meta = '---\ntitle: Frontmatter Title\n---'
  const meta = content.match(metaRE)[0];
  return meta.split('\n')[1]
    .replace('title: ', '');
}

function listAllDirs(level, prevPages = []) {
  let accuPages = [ ...prevPages ];
  return Observable.from(readDir(level))
    .flatMap(parentDir => {
      const thisDir = `${level}/${parentDir}`;
      const content = fse.readFileSync(`${thisDir}/index.md`, 'utf8');
      const subDirs = readDir(thisDir);
      const parent = level.split('/')[ level.split('/').length - 1 ];
      const title = getPageTitle(content);
      const isStubbed = isAStubRE.test(content);

      navData[parentDir] = {
        children: subDirs.map(title => title.toLowerCase()),
        dashedName: parentDir.toLowerCase(),
        hasChildren: !!subDirs.length,
        isStubbed,
        // remove 'src/pages' from the path
        path: thisDir.slice(9),
        parent,
        parentPath: level.slice(9).replace(new RegExp(parent + '/'), ''),
        title
      };
      if (!subDirs.length) {
        // no child directories
        return Observable.of(null);
      }
      return listAllDirs(thisDir, accuPages);
    });
}
module.exports = function createNavData() {
  const startTime = Date.now();
  listAllDirs(topLevel, [])
    .toArray()
    .subscribe(
      () => {},
      err => {
        throw new Error(err);
      },
      () => {
        fse.writeFile(
          `${process.cwd()}/src/navData.json`,
          JSON.stringify(navData, null, 2)
          )
          .then(() => {
            const endTime = Date.now();
            const pages = Object.keys(navData).length;
            console.log(`
navData created

It took ${endTime - startTime}ms to create the nav data for ${pages} pages
`
            );
          })
          .catch(err => {
            console.error(err);
            throw new Error(err);
          });
      }
    );
};
