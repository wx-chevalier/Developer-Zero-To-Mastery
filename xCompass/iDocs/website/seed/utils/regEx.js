const httpsRE = /https?\:\/\//;
const isAFileRE = /(\.md|\.jsx?|\.html?)$/;
const isAStubRE = /This\sis\sa\sstub.+?Help\sour\scommunity\sexpand\sit/;
const markdownLinkRE = /\!?\[.*?\]\(.+?\)/g;
const metaRE = /---[\W\w]*?---\n*?/;
const shouldBeIgnoredRE = /^(\_|\.)/;

module.exports = {
  httpsRE,
  isAFileRE,
  isAStubRE,
  markdownLinkRE,
  metaRE,
  shouldBeIgnoredRE
};
