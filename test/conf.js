// Tests for the calculator.
exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  onPrepare: function () {
    global.Actions = {
      openInNewTab: function (element) {
        //var controlKey = protractor.Key.CONTROL;
        var controlKey = protractor.Key.COMMAND;
        browser.actions().keyDown(controlKey).click(element).keyUp(controlKey).perform();
      }
    }
  }
};
