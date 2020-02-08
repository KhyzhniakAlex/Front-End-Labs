const onPrepare = require('./onPrepare');

const config = {
    async onPrepare() {
        await onPrepare();
    },

    configDir: './config',
    allScriptsTimeout: 10 * 60 * 1000,
    getPageTimeout: 60000,
    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 2 * 60 * 1000,
        print: () => {
        },
    },
};

exports.config = config;
