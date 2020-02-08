const helper = require('./helper');

class MainPage {
    constructor(parentContainer) {
        this._container = parentContainer ? parentContainer.element(by.className('central-wrapper'))
            : element(by.className('central-wrapper'));

        this._mainContent = by.className('content_type_main');
        this._loginButton = by.className('header-topline__user-link');
        this._username = by.className('header-topline__user-link');
    }

    get container() {
        return this._container;
    }

    get loginButton() {
        return this._container.element(this._loginButton);
    }

    get usernameLabel() {
        return this._container.element(this._username);
    }

    waitLoaded() {
        return helper.waitLoaded(this._container.element(this._mainContent), 15000, 'Main page was not loaded');
    }
}

module.exports = MainPage;
