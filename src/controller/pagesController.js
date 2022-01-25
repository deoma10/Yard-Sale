const path = require('path');

const routePath = (route) => {
    return path.resolve(__dirname, '..', 'views', 'pages', route);
};

const pagesController = {
    getIndex: (req, res) => {

         res.render(routePath('index'));

    },
    emailSent: (req, res) => {

        res.render(routePath('emailSent'));

   },
   login: (req, res) => {

    res.render(routePath('login'));

    },
    editAccount: (req,res) => {

        res.render(routePath('editAccount'));

    },
    createAccount: (req,res) => {

        res.render(routePath('createAccount'));

    },
    newPassword:(req,res) => {

        res.render(routePath('newPassword'));

    },
    menuDesktop:(req,res) => {

        res.render(path.resolve(__dirname, '..', 'views', 'partials', 'menuDesktop'));

    },
    menuMobile:(req,res) => {

        res.render(path.resolve(__dirname, '..', 'views', 'partials', 'menuMobile'));

    },
    myOrder:(req,res) => {

        res.render(routePath('order'));

    },
    myOrders:(req,res) => {

        res.render(routePath('myOrders'));

    },
    productDetail:(req,res) => {

        res.render(routePath('productDetail'));

    },
    shoppingCart:(req,res) => {

        res.render(routePath('shoppingCart'));

    }

}

module.exports = pagesController;