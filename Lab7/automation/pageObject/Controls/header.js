class Header {
    constructor(parentContainer) {
        this._container = parentContainer ? parentContainer.element(by.tagName('header'))
            : element(by.tagName('header'));

        this._wishesNavigateButton = by.className('header-actions__item_type_wish');
    }

    async openWishesPage() {
        const wishesButton = await this._container.element(this._wishesNavigateButton);
        return wishesButton.click();
    }
}

module.exports = Header;
