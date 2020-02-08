const {
    MainPage,
    environments,
    helper,
} = require('../pageObject');

describe('Cart', () => {
    const mainPage = new MainPage();

    const rozetkaUrl = environments.Rozetka;

    beforeEach(async () => {
        await helper.openEnv(rozetkaUrl);
        await mainPage.waitLoaded();
    });

    it('should add item', async () => {

    });
});
