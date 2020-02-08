const CartPopUp = require('../Controls/cartPopUp');
const helper = require('../Helpers/helper');
const constants = require('../Helpers/constants');

class ItemPage {
    constructor(parentContainer) {
        this._container = parentContainer ? parentContainer.element(by.tagName('app-rz-product'))
            : element(by.tagName('app-rz-product'));

        this._productContent = by.tagName('product-tab-main');
        this._productTitle = by.className('product__title');
        this._buyButton = by.className('buy-button');
    }

    get container() {
        return this._container;
    }

    get title() {
        return this._container.element(this._productTitle);
    }

    get cartPopUp() {
        return new CartPopUp();
    }

    async addItemToCart() {
        const buyButton = await this._container.element(this._buyButton);
        return buyButton.click();
    }

    waitLoaded() {
        return helper.waitLoaded(this._container.element(this._productContent), constants.timeout, 'Item page');
    }
}

module.exports = ItemPage;
