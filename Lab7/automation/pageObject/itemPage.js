const helper = require('./helper');
const constants = require('./constants');

class ItemPage {
    constructor(parentContainer) {
        this._container = parentContainer ? parentContainer.element(by.tagName('app-rz-product'))
            : element(by.tagName('app-rz-product'));

        this._productContent = by.tagName('product-tab-main');
        this._productTitle = by.className('product__title');
    }

    get container() {
        return this._container;
    }

    get title() {
        return this._container.element(this._productTitle);
    }

    waitLoaded() {
        return helper.waitLoaded(this._container.element(this._productContent), constants.timeout, 'Item page');
    }
}

module.exports = ItemPage;
