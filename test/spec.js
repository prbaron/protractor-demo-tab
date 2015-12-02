describe('calculator', function () {
  var allHandles;

  beforeAll(function () {
    browser.get('http://localhost:3456');
  });

  describe('', function () {
    it('should be focused on calc tab', function () {
      expect(element(by.tagName('h3')).getText()).toEqual('Super Calculator');
    });
  });

  describe('', function () {
    beforeAll(function () {
      var link = element(by.tagName('a'));
      Actions.openInNewTab(link);

      browser.getAllWindowHandles()
        .then(function (handles) {
          allHandles = handles;
          browser.switchTo().window(allHandles[1]);
        });
    });

    it('should be focused on about tab', function () {
      expect(element(by.tagName('h3')).getText()).toEqual('About');
      browser.sleep(3000);
    });

    it('should be focused on calc tab', function () {
      browser.switchTo().window(allHandles[0]);
      expect(element(by.tagName('h3')).getText()).toEqual('Super Calculator');
      browser.sleep(3000);
    });
  });
});
