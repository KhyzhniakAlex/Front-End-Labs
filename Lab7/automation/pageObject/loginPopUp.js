const helper = require('./helper');
const constants = require('./constants');

class LoginPopUp {
    constructor(parentContainer) {
        this._container = parentContainer ? parentContainer.element(by.tagName('single-modal-window'))
            : element(by.tagName('single-modal-window'));

        this._username = by.id('auth_email');
        this._password = by.id('auth_pass');
        this._submitButton = by.className('auth-modal__submit');
    }

    get container() {
        return this._container;
    }

    get usernameInput() {
        return this._container.element(this._username);
    }

    get passwordInput() {
        return this._container.element(this._password);
    }

    get submitButton() {
        return this._container.element(this._submitButton);
    }

    async logIn(username, password) {
        await (await this.usernameInput).sendKeys(username);
        await (await this.passwordInput).sendKeys(password);
        return (await this.submitButton).click();
    }

    waitLoaded() {
        return helper.waitLoaded(this._container, constants.timeout, 'Login form was not displayed');
    }
}

module.exports = LoginPopUp;
