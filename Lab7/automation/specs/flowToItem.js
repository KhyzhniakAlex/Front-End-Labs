const {
    MainPage,
    ItemPage,
    CategoryPage,
    ProductPage,
    environments,
    helper,
    constants,
} = require('../pageObject');

describe('Global Search', () => {
    const mainPage = new MainPage();
    const itemPage = new ItemPage();
    const categoryPage = new CategoryPage();
    const productPage = new ProductPage();

    const rozetkaUrl = environments.Rozetka;

    beforeEach(async () => {
        await helper.openEnv(rozetkaUrl);
        await mainPage.waitLoaded();
    });

    it('should navigate to appropriate product item', async () => {
        const catalog = await mainPage.getProductCatalog();
        await catalog.selectCategoryByText(constants.mainPageCategoryName);
        await categoryPage.waitLoaded();

        await categoryPage.selectCategoryByText(constants.categoryName);
        await productPage.waitLoaded();

        await productPage.selectProductByText(constants.itemName);
        await itemPage.waitLoaded();

        const actualProductTitle = await (await itemPage.title).getText();
        expect(actualProductTitle.includes(constants.itemName)).toBe(true);
    });
});
