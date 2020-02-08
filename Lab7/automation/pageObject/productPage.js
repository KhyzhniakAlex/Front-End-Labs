const helper = require('./helper');
const constants = require('./constants');

class ProductPage {
    constructor(parentContainer) {
        this._container = parentContainer ? parentContainer.element(by.tagName('rz-category'))
            : element(by.tagName('rz-category'));

        this._content = by.className('content_type_catalog');
        this._productGrid = by.className('catalog-grid');
        this._productCell = by.className('catalog-grid__cell');
        this._productTitle = by.className('goods-tile__heading');
    }

    get productGrid() {
        return this._container.element(this._productGrid);
    }

    async selectProductByText(text) {
        const item = await this.productGrid.element(by.cssContainingText(this._productCell.value, text));
        const title = await item.element(this._productTitle);
        return title.click();
    }

    waitLoaded() {
        return helper.waitLoaded(this._container.element(this._content), constants.timeout, 'Product page');
    }
}

module.exports = ProductPage;
