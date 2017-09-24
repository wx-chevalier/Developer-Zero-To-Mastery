![](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

# freeCodeCamp Guide
The freeCodeCamp community is building a massive, searchable "Guide." This reference tool will eventually include thousands of articles that cover all areas of development, design, and data science - all written to be easily understood by people new to coding.

This repo is where we plan and maintain these Guide articles, which we then host on our community's wiki-like [Guide website](https://guide.freecodecamp.org).

**Table of Contents**

- [What are Guide articles?](#what-are-guide-articles)
- [What can I write an article about?](#what-can-i-write-an-article-about)
- [How to contribute](#how-to-contribute)
- [Running the Guide locally on your own computer](#running-the-guide-locally-on-your-own-computer)
- [Article style guide](#article-style-guide)

## What are Guide articles?
Guide articles can be an explanation of a syntax, design pattern, what aria labels are for, or something like what the numbers mean in the top right hand corner of your screen when at freecodecamp.org. You can find an [example article about HTML Elements here](./src/pages/html/elements/index.md).

## What can I write an article about?
We welcome your help writing these articles. You don't have to be an expert in a topic to write about it - this entire Guide is open source, so even if you make a mistake, another contributor will eventually correct it.

To help, find a `stub article` on our [Guide website](https://guide.freecodecamp.org/), write the article, then open a pull request (PR) to replace the stub with your article.

If you can't find a stub about the topic you'd like to write about, you can open a PR that creates the stub and includes your draft article. Feel free to ask us questions if you're not sure where to put a new article in the directory structure.

Before you begin writing, make sure to read the [article style guide](#article-style-guide) below.

## How to contribute
You can create a PR with your draft article (or edits on an existing article) in two ways:

1) The easiest method is to use the GitHub interface. Watch the video demonstration or follow the steps below it:

![Gif showing the GitHub interface steps](https://i.imgur.com/0cmxJwN.gif)

- Go into the "pages" folder (located in `guides/src`) and find the article stub you'd like to write or edit. All stubs will be in an index.md file
- Click the "Edit this file" pencil icon and make your changes to the file in GitHub-flavored Markdown
- Scroll to the bottom of the screen and add a commit message explaining your changes. Then select the radio button option for "Create a new branch for this commit and start a pull request" and click "Propose file changes"
- On the next screen, you can add any other details about your PR, then click "Create pull request"


2) If you prefer to write locally before submitting a PR, then follow these steps:
- Fork this repository
- Copy it to your local machine by running the command `git clone https://github.com/YOUR-GITHUB-USERNAME/guides.git`
- Add a remote upstream so git knows where the official freeCodeCamp guides repository is located by running the command `git remote add upstream https://github.com/freeCodeCamp/guides.git`
- Create a new branch for your work with the command `git checkout -b NEW-BRANCH-NAME`. Try to name your branch in a way that describes your article topic, like `fix/ArticleHTMLElements`
- Write your article, commit your changes locally, and push your new branch to GitHub with the command `git push origin NEW-BRANCH-NAME`
- Go to your repository on GitHub and open a PR

Make sure to maintain your local fork going forward so it stays up-to-date with the freeCodeCamp guides repository. The next time you want to contribute, checkout your local `master` branch and run the command `git pull --rebase upstream master` before creating a new branch. This will grab all the changes on the official `master` branch without making an additional commit in your local repository.

## Running the Guide locally on your own computer

Finally, if you want to run a version of the guides repository locally, follow these steps:

1. Ensure you have the `yarn` package manager installed `npm install -g yarn`
2. Fork this repository
3. :point_down:
```sh
git clone https://github.com/YOUR-GITHUB-USERNAME/guides.git
cd guides
yarn install
yarn run dev
```

In this project we are using `yarn` because `netlify` builds our site with `yarn`.

## Article style guide

We've written the following guide to writing Guide articles to help you get started contributing.

**Table of Contents**

- [Article title](#article-title)
- [Modularity](#modularity)
- [General writing tips](#general-writing-tips)
- [Formatting example code](#formatting-example-code)
- [Adding images to articles](#adding-images-to-articles)
- [Proper nouns](#proper-nouns)
- [Where to get help](#where-to-get-help)


### Article title

Article titles should be as short, concise, and to-the-point as possible. We want campers to quickly find the information they're looking for, and the title should reflect the main theme of the article.

Here are some title examples:

- "HTML Lists"
- "CSS Borders"
- "JavaScript For Loop"

The folder name is used in the URL, so only use dashes `-`, numbers `0-9`, and lowercase letters `a-z` for it.

Here are some folder name examples:

- html-lists
- css-borders
- javascript-for-loop

However, you can include special characters in the article title.

### Modularity

Each article should explain exactly one concept, and that concept should be apparent from the article's title.

We can reference other articles by linking to them inline, or in an "Other Resources" section at the end of the article.

Our goal is to have thousands of articles that cover a broad range of technical topics.

### General writing tips

Before you begin writing, create an outline of the topic and think about any coding examples you'll use (if applicable). This helps to organize your thoughts and make the writing process easier.

Articles should be written with short, clear sentences, and use as little jargon as necessary. All jargon should be defined immediately in plain English.

The introduction paragraph should only be 1-2 sentences long and be a simple explanation of the main topic. It should limit the use of any links to other Guide articles, as they can be distracting.

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs over a wall of text.

Use active voice instead of passive voice. Generally, it's a stronger and more straightforward way to communicate a subject. For example:
  - (Passive) The `for` loop in JavaScript is used by programmers to...
  - (Active) Programmers use the `for` loop in JavaScript to...

If you want to abbreviate a term in your article, write it out fully first, then put the abbreviation in parentheses. For example, "In computer science, an abstract syntax tree (AST) is ..."

Text should use the second person ("you") to help to give it a conversational tone. This way, the text and instructions seem to speak directly to the camper reading it. Try to avoid using the first person ("I", "we", "let's", and "us").

If there are other Guide resources you think campers would benefit from, add them at the bottom in an "Other Resources" section.

You can add diagrams, graphics, or visualizations as necessary. You can also embed relevant YouTube videos and interactive REPL.it code editors.

Don't use emojis or emoticons in the Guide. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

Use double quotes where applicable.

Format language keywords as code - this is done with the backtick key (located to the left of the "1" key on a US keyboard) in GitHub-flavored markdown. For example, put backticks around HTML tag names or CSS property names.

Use the Oxford Comma when possible. It’s makes things easier, clearer, and prettier to read.

### Formatting example code

Campers will likely use Guide articles as a quick reference to look up syntax. Articles should have simple real-world examples that show common-use cases of that syntax.

Here are specific formatting guidelines for any code:

- JavaScript statements end with a semicolon
- Use double quotes where applicable
- Show generally-accepted best practices, particularly for accessibility
- Comments made should have a space between the comment characters and the comment themselves

    `// Fix this line`
- GitHub-flavored markdown supports [syntax highlighting in code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting) for many programming languages. To use it, indicate the language after starting ```
```
    ```html
        <div class='awesome' id='more-awesome'>
          <p>This is text in html</p>
        </div>
    ```

    ```javascript
        function logTheThings(stuff) {
         console.log(stuff);
        }
    ```

    ```css
       .awesome {
          background-color: #FCCFCC;
        }
    ```
```

### Adding images to articles

For including images, if the images aren't already hosted somewhere else on the web, you'll need to put them online yourself. A good way to do this is to commit them to a GitHub repository of your own, then push them to GitHub. Then you can right click the image and copy its image source.

Then you'd just need to reference them in your markdown file with this syntax:

`![your alt text](your url)`

Then the images should show up when you click the "preview table" tab.

### Proper nouns

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in Guide articles.

- JavaScript (capital letters in "J" and "S" and no abbreviations)
- Node.js

Front-end development (adjective form with a dash) is when you working on the front end (noun form with no dash). The same goes with the back end, full stack, and many other compound terms.

### Where to get help

Technical writing, or the literature of science and technology, is hard. You'll need to take a technical (usually abstract) topic and explain it in a clear, accurate, and objective manner. You'll likely go through several rounds of proofreading and editing before you're happy with the result.

Use the [Hemingway App](http://www.hemingwayapp.com/). There’s nothing magical about this simple tool, but it will automatically detect widely agreed-upon style issues:

- passive voice
- unnecessary adverbs
- words that have more common equivalents

The Hemingway App will assign a “grade level” for your writing. You should aim for a grade level of 6.

Also, there's a community of support from a whole team of contributors, whom you can bounce ideas off of and ask for input on your writing. Stay active in the [contributors chat room](https://gitter.im/freecodecamp/contributors) and ask lots of questions.

With your help, we can create a comprehensive reference tool that will help millions of people who are learning to code for years to come.
