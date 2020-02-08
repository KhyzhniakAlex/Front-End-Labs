module.exports = {
    openEnv,
    waitLoaded,
    waitIsDisplayed,
};

async function openEnv(env) {
    try {
        await browser.get(env);
        return browser.driver.manage().window().maximize();
    } catch (err) {
        throw new Error(`Site opening failed. ${err}`);
    }
}

function waitLoaded(element, timeout = 15000, elementName) {
    return browser.wait(protractor.ExpectedConditions.presenceOf(element), timeout, `${elementName} was not loaded within timeout`);
}

function waitIsDisplayed(element, timeout = 15000, elementName) {
    return browser.wait(protractor.ExpectedConditions.visibilityOf(element), timeout, `${elementName} didn't become visible within timeout`);
}
