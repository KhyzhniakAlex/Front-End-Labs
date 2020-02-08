const helper = require('./helper');
const constants = require('./constants');
const CatalogMenu = require('./catalogMenu');

class MainPage {
    constructor(parentContainer) {
        this._container = parentContainer ? parentContainer.element(by.className('central-wrapper'))
            : element(by.className('central-wrapper'));

        this._mainContent = by.className('content_type_main');
        this._loginButton = by.className('header-topline__user-link');
        this._username = by.className('header-topline__user-link');
        this._globalSearch = by.className('search-form__input');
        this._globalSearchButton = by.className('search-form__submit');
        this._catalogBtn = by.className('menu-toggler');
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

    get globalSearchInput() {
        return this._container.element(this._globalSearch);
    }

    get globalSearchSubmitBtn() {
        return this._container.element(this._globalSearchButton);
    }

    async getProductCatalog() {
        const catalogButton = await this._container.element(this._catalogBtn);
        await catalogButton.click();
        return new CatalogMenu(this._container);
    }

    async findItemByGlobalSearch(searchString) {
        await (await this.globalSearchInput).sendKeys(searchString);
        return (await this.globalSearchSubmitBtn).click();
    }

    waitLoaded() {
        return helper.waitLoaded(this._container.element(this._mainContent), constants.timeout, 'Main page');
    }
}

module.exports = MainPage;
