protractor-demo
===============

Demo test application and protractor tests.

Setup
-----
    npm install

Go to *test/conf* and uncomment the right `controlKey` based on your OS.

To run
------
Get ChromeDriver set up: Run `./node_modules/.bin/webdriver-manager update`.

Start the test application server with
`node app/expressserver.js`
Or if you're feeling lazy, just `npm start`.

Run the tests with
`node_modules/.bin/protractor test/conf.js`
Or if you're feeling lazy, just `npm test`.

Watch them go!
