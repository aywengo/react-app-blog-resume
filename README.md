## React app blog resume

Boilerplate is taken from [React App Boilerplate](https://github.com/christianalfoni/react-app-boilerplate)

Start developing React JS applications easily with the included tooling. Using gulp with browserify and jasmine for testing.

Read more about how it works at: [React JS workflow, part 2](http://christianalfoni.github.io/javascript/2014/10/30/react-js-workflow-part2.html)

Icons are taken from [here](http://www.iconarchive.com/show/basic-round-social-icons-by-sicons.3.html) and [here](http://www.freefavicon.com/freefavicons/food/iconinfo/cup-of-coffee-152-155473.html)

### Install

* Clone the repo
* Run `npm install`

### Development
* Run `gulp`
* Go to `localhost:8889` to display the app
* Go to `localhost:8889/testrunner.html` to see your tests
* Any changes to `app` or `styles` folder will automatically rebuild to `build` folder
* Both tests and application changes will refresh automatically in the browser
* Run `gulp test` to run all tests with phantomJS and produce XML reports

### Minify the code, ready for production
* Run `NODE_ENV=production gulp deploy`

### Directory
* **build/**: Where your automatically builds to. This is where you launch your app in development
* **dist/**: Where the deployed code exists, ready for production
* **styles/**: Where you put your css files
* **specs/**: Where you put your test files
* **gulpfile**: Gulp configuration
