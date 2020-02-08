const helper = require('../Helpers/helper');
const constants = require('../Helpers/constants');

class WishesPage {
    constructor(parentContainer) {
        this._container = parentContainer ? parentContainer.element(by.className('content-inner'))
            : element(by.className('content-inner'));

        this._wishesList = by.name('wishlist-block-goods');
        this._wishedItem = by.name('wishlist-cell');
    }

    get wishedContainer() {
        return this._container.element(this._wishesList);
    }

    getWishedItemByText(text) {
        return this.wishedContainer.element(by.cssContainingText(this._wishedItem.value, text));
    }

    waitLoaded() {
        return helper.waitLoaded(this._container, constants.timeout, 'Wishes page');
    }
}

module.exports = WishesPage;
