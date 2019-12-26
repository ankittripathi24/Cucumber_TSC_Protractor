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

    cucumberOpts: {
        compiler: [],
        strict  : true,
         require: '../../StepDefs/*.ts',
        // require: '../StepDefs/*.js',
        // require: '../StepDefs/my_steps.ts',

        tags: false,
        // format: ['pretty'],
        profile: false,
        'no-source': true,
    }
};