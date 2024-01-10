const { $ } = require('@wdio/globals')
const Page = require('./page');

class SaucePage extends Page {
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }
}