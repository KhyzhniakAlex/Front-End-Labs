const CartPopUp = require('../Controls/cartPopUp');
const Header = require('../Controls/header');

const helper = require('../Helpers/helper');
const constants = require('../Helpers/constants');

class ItemPage {
    constructor(parentContainer) {
        this._container = parentContainer ? parentContainer.element(by.tagName('app-rz-product'))
            : element(by.tagName('app-rz-product'));

        this._productContent = by.tagName('product-tab-main');
        this._productTitle = by.className('product__title');
        this._buyButton = by.className('buy-button');
        this._wishedItem = by.className('wish-button');
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

    get header() {
        return new Header();
    }

    async addItemToCart() {
        const buyButton = await this._container.element(this._buyButton);
        return buyButton.click();
    }

    async addItemToWishes() {
        const wishedButton = await this._container.element(this._wishedItem);
        return wishedButton.click();
    }

    waitLoaded() {
        return helper.waitLoaded(this._container.element(this._productContent), constants.timeout, 'Item page');
    }
}

module.exports = ItemPage;
