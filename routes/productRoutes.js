import express from "express";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productCountController, productFilterController, productListController, productPhotoController, updateProductController } from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from 'express-formidable';  //used for file uploads

const router = express.Router();

//routes

//create product
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);


//get product
router.get('/get-product', getProductController);


//get Single product
router.get('/get-product/:slug', getSingleProductController);


//get photo
router.get('/product-photo/:pid', productPhotoController);


//delete product
router.delete('/delete-product/:id',requireSignIn, isAdmin, deleteProductController);


//update product
router.put('/update-product/:pid', requireSignIn, isAdmin,formidable(), updateProductController);


// filter product
router.post('/product-filters', productFilterController);


//product count
router.get('/product-count', productCountController);


//product per page
router.get('/product-list/:page', productListController);







export default router;