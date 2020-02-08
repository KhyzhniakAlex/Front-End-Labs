const helper = require('../Helpers/helper');
const constants = require('../Helpers/constants');

class CartPopUp {
    constructor(parentContainer) {
        this._container = parentContainer ? parentContainer.element(by.tagName('cart-content'))
            : element(by.tagName('cart-content'));

        this._productTitle = by.className('cart-modal__title');
    }

    get productTitles() {
        return this._container.all(this._productTitle);
    }

    waitLoaded() {
        return helper.waitIsDisplayed(this._container, constants.timeout, 'Cart popUp');
    }
}

module.exports = CartPopUp;
