const helper = require('./helper');
const constants = require('./constants');

class CategoryPage {
    constructor(parentContainer) {
        this._container = parentContainer ? parentContainer.element(by.tagName('rz-super-portal'))
            : element(by.tagName('rz-super-portal'));

        this._dynamicContent = by.tagName('sp-dynamic-widgets');
        this._categoryItem = by.className('portal-grid__cell');
    }

    get container() {
        return this._container;
    }

    get contentContainer() {
        return this._container.element(this._dynamicContent);
    }

    async selectCategoryByText(text) {
        const item = await this.contentContainer.element(by.cssContainingText(this._categoryItem.value, text));
        return item.click();
    }

    waitLoaded() {
        return helper.waitLoaded(this.contentContainer, constants.timeout, 'Category page');
    }
}

module.exports = CategoryPage;
