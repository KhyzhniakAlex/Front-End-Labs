const {
    MainPage,
    LoginPopUp,
    credentials,
    environments,
    helper,
    constants,
} = require('../pageObject');

describe('Login', () => {
    const mainPage = new MainPage();
    const loginPopUp = new LoginPopUp();

    const rozetkaUrl = environments.Rozetka;
    const username = credentials.username;
    const password = credentials.password;

    beforeEach(async () => {
        await helper.openEnv(rozetkaUrl);
        await mainPage.waitLoaded();
    });

    it('should log in user', async () => {
        (await mainPage.loginButton).click();
        await loginPopUp.waitLoaded();

        await loginPopUp.logIn(username, password);
        await loginPopUp.waitIsNotDisplayed();

        const usernameLabel = await mainPage.usernameLabel;
        const actualUserName = await usernameLabel.getText();

        expect(actualUserName).toBe(constants.userName);
    });
});
