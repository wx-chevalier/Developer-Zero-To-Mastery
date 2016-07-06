var request = require('request');
var cheerio = require('cheerio');
var Horseman = require('node-horseman');

var scraperPromises = [];

// //make request for URLS
// request('https://medium.com/junior-writes/trending', function(err, res, body) {
//   $ = cheerio.load(body);
//   var articles = new Promise(function(resolve, reject) {
//       return getArticleLink(resolve, reject);
//     })
//   //scrapeArticle after promise is fulfilled
//   articles.then(
//     function(articles) {
//       scrapeArticle(articles);
//     }
//   )
// });

// //find articles
// function getArticleLink(resolve, reject) {
//   var articleArr = [];
//   $('.block').children().each(function(i, element) {
//     var articleLink = $(this).children().children().children().next().children('a').attr('href');
//     if (articleLink) {
//       articleLink = articleLink.replace(/.?source=most_recommended---/g, '')
//       articleArr.push(articleLink);
//     }
//   })

//   resolve(articleArr);
// }

// function scrapeArticle(articles) {
//   articles.forEach(function(url) {
//     var title = new Promise(function(resolve, reject) {
//       return getTitle(url, resolve);
//     });
//     var auth = new Promise(function(resolve, reject) {
//       return getAuth(url, resolve);
//     });
//     var quote = new Promise(function(resolve, reject) {
//       return getQuote(url, resolve);
//     });

//     //resolve array of promise objects
//     Promise.all([title, auth, quote])
//     .then(function(info) {

//       return articleInfo = {
//         title: info[0],
//         auth: info[1],
//         quote: info[2]
//       }
//     }).then(function(articleInfo) {
//       scraperPromises.push(articleInfo);
//       console.log(articleInfo);
//     })
//   });
// }

// function getTitle(url, resolve, reject) {


//   var titleHorseman = new Horseman();

//   titleHorseman
//     .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
//     .on('timeout', function(msg) {
//       resolve('👻👻👻  Will add quote here because nothing was highlighted');
//       titleHorseman.close();
//     })
//     .open(url)
//     .title()
//     .then(function(text) {

//       // Resolve promise with text
//       text = text.replace(/.— Junior Writes — Medium/g, '')
//       resolve(text);
//       titleHorseman.close();
//       return;
//     })
//     .catch(function(err) {
//     });
// }

// function getAuth(url, resolve) {
//   var authHorseman = new Horseman();

//   authHorseman
//     .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
//     .on('timeout', function(msg) {
//       resolve('👻👻👻  Will add quote here because nothing was highlighted');
//       authHorseman.close();
//     })
//     .open(url)
//     .waitForSelector('.card-name')
//     .evaluate(function(selector) {
//       return $(selector)[0].textContent;
//     }, '.card-name')
//     .then(function(text) {
//       // Resolve promise with text
//       resolve(text);
//       authHorseman.close();
//       return;
//     })
//     .catch(function(err) {
//       console.error(err);
//     });
// }

// function getQuote(url, resolve, reject) {
//   var quoteHorseman = new Horseman();

//   quoteHorseman
//     .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
//     .on('timeout', function(msg) {
//       resolve('👻👻👻  Will add quote here because nothing was highlighted');
//       quoteHorseman.close();
//     })
//     .open(url)
//     .waitForSelector('.markup--quote')
//     .evaluate(function(selector) {
//       return $(selector)[0].textContent;
//     }, '.markup--quote')
//     .then(function(text) {
//       // Resolve promise with text
//       resolve(text);
//       quoteHorseman.close();
//       return;
//     })
//     .catch(function(err) {});
// }


  var titleHorseman = new Horseman({
    proxy:"127.0.0.1:1080",
    proxyType:"socks5"
  });

  titleHorseman
    .userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0')
    .on('timeout', function(msg) {
      resolve('👻👻👻  Will add quote here because nothing was highlighted');
      titleHorseman.close();
    })
    .open("https://medium.com/junior-writes/mutate-31156085c631#.l5wnnnd9i")
    .text("html")
    .then(function(text) {
      console.log(text);

      // Resolve promise with text
      text = text.replace(/.— Junior Writes — Medium/g, '')
      titleHorseman.close();
      return;
    })
    .catch(function(err) {
      console.log(err);
    });

