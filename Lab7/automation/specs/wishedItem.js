const {
    MainPage,
    ItemPage,
    LoginPopUp,
    WishesPage,
    credentials,
    environments,
    helper,
    constants,
} = require('../pageObject');

describe('Wished item', () => {
    const mainPage = new MainPage();
    const loginPopUp = new LoginPopUp();
    const itemPage = new ItemPage();
    const wishedPage = new WishesPage();

    const rozetkaUrl = environments.Rozetka;
    const username = credentials.username;
    const password = credentials.password;
    const searchString = constants.itemName;

    beforeEach(async () => {
        await helper.openEnv(rozetkaUrl);
        await mainPage.waitLoaded();
    });

    it('should be added to wishes page', async () => {
        (await mainPage.loginButton).click();
        await loginPopUp.waitLoaded();

        await loginPopUp.logIn(username, password);
        await loginPopUp.waitIsNotDisplayed();

        await mainPage.findItemByGlobalSearch(searchString);
        await itemPage.waitLoaded();

        await itemPage.addItemToWishes();

        await helper.waitIsDisplayed(await wishedPage.getWishedItemByText(searchString), constants.timeout, 'Wished item');
    });
});
