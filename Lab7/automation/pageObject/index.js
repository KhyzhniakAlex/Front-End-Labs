const MainPage = require('./Pages/mainPage');
const ItemPage = require('./Pages/itemPage');
const CategoryPage = require('./Pages/categoryPage');
const ProductPage = require('./Pages/productPage');
const WishesPage = require('./Pages/wishesPage');

const LoginPopUp = require('./Controls/loginPopUp');

const credentials = require('./Helpers/credentials');
const environments = require('./Helpers/environments');
const helper = require('./Helpers/helper');
const constants = require('./Helpers/constants');

module.exports = {
    MainPage,
    ItemPage,
    CategoryPage,
    ProductPage,
    WishesPage,
    LoginPopUp,
    credentials,
    environments,
    helper,
    constants,
};
