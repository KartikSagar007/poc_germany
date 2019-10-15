
## Setup your system

### node.js v10.16.x

You will need [node.js](https://nodejs.org) v10.16.x (or greater). In case you want to manage several node versions on your machine, we recommend [nvm](https://github.com/creationix/nvm) for Mac/*nix and [nodist](https://github.com/marcelklehr/nodist) for Windows.

### Install NPM packages and start

Once you have node.js installed, open up your OS's Terminal/Bash application, change into the root folder of the test (where the file `package.json` is located) and run `npm install` (please note that you will need a *working Internet connection*).

After all NPM packages installed successfully, the development build and serve processes will automatically be triggered (you can do that manually by running `npm run start`).
It will pre-process SASS files and convert them to CSS but also serve the page in your localhost (so you can start developing your challenge using SASS right away and see how it looks in the browser).

At this point you should be able to see a blank page in your browser.

### IDE configuration

Please configure your IDE to use the [`.editorconfig`](http://editorconfig.org/#download) as it will help you deliver consistent coding styles as defined by us.

### Troubleshooting

If you experience problems during the setup please *STOP* and send a message to the human resource employee you are in contact with, describing your steps and pasting the error log of your Terminal/Bash application.

## What we expect from your code

### Browsers it should work in and display correctly

* Latest Chrome

### Where should I place my files?

We've got an initial folder and file structure in `src` prepared for you:

* `index.html` - HTML file with prepared markup (needs your improvements)
* `index.js` - this should be your main JS file which coordinates other JS modules
* `styles.scss` - this file will be taken as the entry point once you run any css related tasks like `npm run css`
* `styles/` - inside this folder you can add styles, classes, mixins, variables, etc that will help you to implement the required design as fast as possible. Please use the existing `_base.scss` file.
* `components/` - inside this folder you should add all the JavaScript components needed to make your solution work as it should.
* `assets/` - images and other assets to be used by this solution.
* `mocks/` - contains the JSON file(s) with the shop data (cars list). You must never change anything directly in the JSON files.

Please keep and use this structure.

### Coding guidelines

1. HTML
    - Make sure to add all needed HTML so that it fits the exercise requirements.
    - Please use semantically correct HTML5 markup [[help]](http://html5doctor.com/lets-talk-about-semantics/) while having in mind Web Accessibility.

2. JavaScript
    - Please use plain JavaScript, *no libraries or frameworks* are allowed (such as React, Vue, Angular, jQuery, Lodash, etc).
    - We would like to see YOUR clean and modular JavaScript code (while commented when needed).
    - Use of recent JavaScript features (eg: ES6, ES2016, ES2017) is highly encouraged as long as supported by latest chrome (so you shouldn't have to transpile/compile your JavaScript).

3. CSS
    - We kindly ask you to use SASS.
    - Your SASS code should be split into modules. Add into each component (created inside `src/components/`) a new `.scss` file with the component's name. E.g. within `src/components/shoppingItem` you want to add `_shoppingItem.scss`.
    - Twitter Bootstrap or similar component frameworks are not allowed.

### Can I use additional NPM packages?

Yes, as long as the points from the above section [Coding guidelines](#coding-guidelines) are not violated.

Feel free to use your tools of choice regarding serving/reloading/bundling package(s).

You can even replace the existing `http-server` used on the `serve` task with some other package(s) you like, and/or add some "watch/hotreload" capability (but please make sure you don't end up spending too much time doing it so you can focus on the requested [Requirements](#requirements)).


Good luck :-)
