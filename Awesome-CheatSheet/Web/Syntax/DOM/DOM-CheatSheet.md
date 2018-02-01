# DOM 语法速览与实践清单

```js
const bodyRect = document.body.getBoundingClientRect(),
  elemRect = element.getBoundingClientRect(),
  offset = elemRect.top - bodyRect.top;

console.log("Element is " + offset + " vertical pixels from <body>");
```

```js
// Add Rules to Stylesheets with JavaScript
// http://davidwalsh.name/add-rules-stylesheets

/* Getting the Stylesheet
Which stylesheet you add the rules to is up to you.  If you have a specific stylesheet in mind, you can add an ID to the LINK or STYLE element within your page HTML and get the CSSStyleSheet object by referencing the element's sheet property.  The stylesheets can be found in the document.styleSheets object:*/

var sheets = document.styleSheets; // returns an Array-like StyleSheetList

/*
Returns:  
StyleSheetList {0: CSSStyleSheet, 1: CSSStyleSheet, 2: CSSStyleSheet, 3: CSSStyleSheet, 4: CSSStyleSheet, 5: CSSStyleSheet, 6: CSSStyleSheet, 7: CSSStyleSheet, 8: CSSStyleSheet, 9: CSSStyleSheet, 10: CSSStyleSheet, 11: CSSStyleSheet, 12: CSSStyleSheet, 13: CSSStyleSheet, 14: CSSStyleSheet, 15: CSSStyleSheet, length: 16, item: function}
*/

// Grab the first sheet, regardless of media
var sheet = document.styleSheets[0];

/* Creating a New Stylesheet
In many cases, it may just be best to create a new STYLE element for your dynamic rules.  This is quite easy:*/
var sheet = (function() {
  // Create the <style> tag
  var style = document.createElement("style");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "@media only screen and (max-width : 1024px)")

  // WebKit hack :(
  style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.head.appendChild(style);

  return style.sheet;
})();

/* Adding Rules
CSSStyleSheet objects have an addRule method which allows you to register CSS rules within the stylesheet.  The addRule method accepts three arguments:  the selector, the second the CSS code for the rule, and the third is the zero-based integer index representing the style position (in relation to styles of the same selector): */
sheet.addRule("#myList li", "float: left; background: red !important;", 1);

/* Inserting Rules
Stylesheets also have an insertRule method which isn't available in earlier IE's.  The insertRule combines the first two arguments of addRule: */
sheet.insertRule("header { float: left; opacity: 0.8; }", 1);

/* Safely Applying Rules
Since browser support for insertRule isn't as global, it's best to create a wrapping function to do the rule application.  Here's a quick and dirty method: */
function addCSSRule(sheet, selector, rules, index) {
  if (sheet.insertRule) {
    sheet.insertRule(selector + "{" + rules + "}", index);
  } else {
    sheet.addRule(selector, rules, index);
  }
}

// Use it!
addCSSRule(document.styleSheets[0], "header", "float: left");

/* Inserting Rules for Media Queries
Media query-specific rules can be added in one of two ways. The first way is through the standard insertRule method: */
sheet.insertRule(
  "@media only screen and (max-width : 1140px) { header { display: none; } }"
);
```
