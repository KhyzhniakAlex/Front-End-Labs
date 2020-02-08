const {
    MainPage,
    ItemPage,
    environments,
    helper,
    constants,
} = require('../pageObject');

describe('Cart', () => {
    const mainPage = new MainPage();
    const itemPage = new ItemPage();

    const rozetkaUrl = environments.Rozetka;
    const searchString = constants.itemName;

    beforeEach(async () => {
        await helper.openEnv(rozetkaUrl);
        await mainPage.waitLoaded();
    });

    it('should add item', async () => {
        await mainPage.findItemByGlobalSearch(searchString);
        await itemPage.waitLoaded();

        const cartPopUp = await itemPage.cartPopUp;
        await itemPage.addItemToCart();
        await cartPopUp.waitLoaded();

        const actualProductTitleList = await cartPopUp.productTitles;
        const productTitlesText = await protractor.promise.map(actualProductTitleList, title => title.getText());

        expect(productTitlesText[0]).toBe(constants.itemName);
    });
});
