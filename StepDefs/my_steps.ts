import {Given} from "cucumber";

// import {browser, by, element} from "protractor/built";


// import {browser} from "protractor";
// import {by, element} from "protractor";



var myStepDefinitionsWrapper = function () {
    Given(/^I am on first page$/, async function (callback) {
        // browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login").then(function () {
        //     browser.sleep(1000)
        // });
        // await element(browser.model('Auth.user.name')).sendKeys("angular");
        // await element(by.id('password')).sendKeys("password");
        // await element(by.id('formly_1_input_username_0')).sendKeys("angular");
        // await element(by.className("btn btn-danger")).click();
        // await element.all(by.css("[href*='#/login']")).first().click().then(function () {
        //     console.log(element(by.id('formly_1_input_username_0')));
        // });;
        console.log("Success")
    });
};
module.exports = myStepDefinitionsWrapper;