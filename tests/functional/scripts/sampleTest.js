module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://fidi-edson.mybluemix.net/')
      .waitForElementVisible('button#want', 60000, true,
        function(){}, 'Waiting for Search Input to become visible')
      .click('button#want')
      //.setValue('input.gsfi', 'Test')
      .waitForElementPresent('#want', 60000)
      .pause(5000)
      .assert.title('FÍ di Edson');
  }
};
