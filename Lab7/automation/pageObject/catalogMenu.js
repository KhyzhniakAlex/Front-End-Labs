const helper = require('./helper');
const constants = require('./constants');

class CatalogMenu {
    constructor(parentContainer) {
        this._container = parentContainer ? parentContainer.element(by.tagName('fat-menu'))
            : element(by.tagName('fat-menu'));

        this._categoriesList = by.className('menu-categories');
        this._categoryItem = by.className('menu-categories__link');
    }

    get categoryListContainer() {
        return this._container.element(this._categoriesList);
    }

    async selectCategoryByText(text) {
        const item = await this.categoryListContainer.element(by.cssContainingText(this._categoryItem.value, text));
        return item.click();
    }

    waitLoaded() {
        return helper.waitIsDisplayed(this._container, constants.timeout, 'Catalog menu');
    }
}

module.exports = CatalogMenu;
