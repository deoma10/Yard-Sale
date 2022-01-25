const express = require('express');
const pagesRouter = express.Router();
const {pagesController} = require("../controller");


pagesRouter.get('/', pagesController.getIndex);

pagesRouter.get('/emailsent', pagesController.emailSent);

pagesRouter.get('/login', pagesController.login);

pagesRouter.get('/editaccount', pagesController.editAccount);

pagesRouter.get('/createaccount', pagesController.createAccount);

pagesRouter.get('/newpassword', pagesController.newPassword);

pagesRouter.get('/menudesktop', pagesController.menuDesktop);

pagesRouter.get('/menumobile', pagesController.menuMobile);

pagesRouter.get('/order', pagesController.myOrder);

pagesRouter.get('/myorders', pagesController.myOrders);

pagesRouter.get('/productdetail', pagesController.productDetail);

pagesRouter.get('/shoppingcart', pagesController.shoppingCart);


// productRouter.get('/productCart', productController.getProductCart);

// //Detalle de producto
// productRouter.get('/productDetail/:id', productController.getProductDetail);

// //listado de detalle de todos los producto
// productRouter.get('/productList', productController.getProductList);

// productRouter.get('/productCreation', productController.getProductCreation);

// // Crear producto
// productRouter.post('/', multerUpload.single('productImage'), productValidation, productController.createProduct);

// productRouter.get('/productMod/:id', productController.getProductMod);

// productRouter.put('/productMod/:id', multerUpload.single('productImage'), productController.editProduct);

// // Eliminar producto
// productRouter.delete('/productDelete/:id', productController.deleteProducts);

// //Tabla de productos
// productRouter.get('/products', productController.getProducts);

// //Administador
// productRouter.get('/admin', productController.getAdmin);

module.exports = pagesRouter;