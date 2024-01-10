const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

Given(/^I am on the sauce demo page$/, async() => {
	await browser.url('https://www.saucedemo.com')
});

When(/^I login with (\w+) and (.+)$/, async () => {
	await $('#username').setValue(username)
    await $('#password').setValue(password)
});

Then(/^I should page title saying <message>$/, async () => {
	return true;
});
