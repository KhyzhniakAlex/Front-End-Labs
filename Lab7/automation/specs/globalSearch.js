const {
    MainPage,
    ItemPage,
    environments,
    helper,
    constants,
} = require('../pageObject');

describe('Global Search', () => {
    const mainPage = new MainPage();
    const itemPage = new ItemPage();

    const rozetkaUrl = environments.Rozetka;
    const searchString = constants.itemName;

    beforeEach(async () => {
        await helper.openEnv(rozetkaUrl);
        await mainPage.waitLoaded();
    });

    it('should navigate to appropriate product item', async () => {
        await mainPage.findItemByGlobalSearch(searchString);
        await itemPage.waitLoaded();

        const actualProductTitle = await (await itemPage.title).getText();
        expect(actualProductTitle).toBe(searchString);
    });
});
