exports.config = {
    useAllAngular2AppRoots: true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../../FeatureFiles/*.feature'],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    cucumberOpts: {
        compiler: [],
        strict: true,
        require: '../../StepDefs/*.ts',
        // require: '../StepDefs/*.js',
        // require: '../StepDefs/my_steps.ts',
        tags: false,
        // format: ['pretty'],
        profile: false,
        'no-source': true,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VjdW1iZXJDb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQ3VjdW1iZXJDb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDYixzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBQ0QsS0FBSyxFQUFFLENBQUUsOEJBQThCLENBQUU7SUFFekMsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFHL0QsYUFBYSxFQUFFLElBQUk7SUFFbkIsMEVBQTBFO0lBQzFFLHNDQUFzQztJQUN0QyxTQUFTLEVBQUUsSUFBSTtJQUVmLFlBQVksRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osTUFBTSxFQUFJLElBQUk7UUFDYixPQUFPLEVBQUUscUJBQXFCO1FBQy9CLCtCQUErQjtRQUMvQixzQ0FBc0M7UUFFdEMsSUFBSSxFQUFFLEtBQUs7UUFDWCxzQkFBc0I7UUFDdEIsT0FBTyxFQUFFLEtBQUs7UUFDZCxXQUFXLEVBQUUsSUFBSTtLQUNwQjtDQUNKLENBQUMifQ==