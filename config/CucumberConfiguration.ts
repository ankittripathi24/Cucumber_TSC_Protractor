import {Config} from 'protractor';

exports.config = {
    useAllAngular2AppRoots: true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: [ '../../FeatureFiles/*.feature' ],

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),


    directConnect: true,

    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    // onPrepare() {
    //     require('ts-node').register({
    //         project: require('path').join(__dirname, '../../tsconfig.json')
    //     });
    // },

    cucumberOpts: {
        compiler: 'ts:ts-node/register',
        strict  : true,
        require:  ["../../JSFiles/StepDefs/*.js"],

        tags: false,
        // format: ['pretty'],
        profile: false,
        'no-source': true
    }

};