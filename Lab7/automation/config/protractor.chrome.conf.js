const baseConfig = require('./protractor.base.conf').config;

const configCurrent = {
    directConnect: true,

    SELENIUM_PROMISE_MANAGER: false,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--disable-popup-blocking', 'ignore-certificate-errors'],
            excludeSwitches: ['enable-automation'],
            useAutomationExtension: false,
        },
        platform: 'ANY',
        requireWindowFocus: true,
        shardTestFiles: true,
        maxInstances: 1,
    },

    specs: [
        '../specs/flowToItem.js',
    ],

    maxSessions: 1,
};

exports.config = Object.assign(baseConfig, configCurrent);
