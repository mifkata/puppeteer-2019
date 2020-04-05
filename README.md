# GoogleChrome Puppeteer for Good & Evil
Presentation, docs and scripts from a presentation of the essentials of [Google Chrome Puppeteer](https://github.com/GoogleChrome/puppeteer), the Node.JS library for taking full advantage of Chrome's DevTools protocol using JavaScript.

The presentation was held on 17 April, 2019 @ [VarnaLab](https://www.varnalab.org/)

## Contents
* [VarnaLabPresentation.key](./VarnaLabPresentation.key) - the Keynote presentation
* [scripts](./scripts) - demo code used in the presentation

## Scripts
* `pdf.js` - outputs a web page as PDF, after clicking on a few confirmation windows
* `screenshot.js` - outputs a Chrome screen as PNG
* `ssr.js` - populates ToDo items and renders then in the backend using different frameworks, SPA is located at [TodoMVC.com](http://todomvc.com/)

## Usage

```bash
# open [url], take screenshot and save it as output/full-page.pdf
# default [url] is https://www.btv.bg
node scripts/pdf.js [url]

# open [url], take screenshot and save it as output/screenshot.png
# default [url] is https://dir.bg
node scripts/screenshot.js [url]

# Open http://todomvc.com/examples/[framework]/ and populate with
# items and save the page as output/ssr-page.html
# default [framework] is backbone
node scripts/ssr.js [framework]
```

## License
Apache 2.0
