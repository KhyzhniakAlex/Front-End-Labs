const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

module.exports = async () => {
    await browser.driver.manage()
        .window()
        .maximize();
    await browser.waitForAngularEnabled(false);

    // reporters
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));

    // Global vars
    global._ = require('lodash');
    global.inherits = require('inherits');
};
