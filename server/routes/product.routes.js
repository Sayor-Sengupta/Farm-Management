import { Router } from "express";
import { addOneToQuantity, addOrderFromCart, addToCart, allCartProduct, deleteCartProduct, filterProduct, getOrders, getProductList, searchProduct, sellerProduct, uploadProduct } from "../controller/Ecommerce.controller.js";
import LoggedIn from "../middleware/LoggedIn.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();
router.post("/upload",upload.single('image'), LoggedIn,uploadProduct);
router.get("/getProductList",LoggedIn,getProductList)
router.post("/filter",LoggedIn,filterProduct)
router.get('/search',LoggedIn,searchProduct)
router.post('/addToCart',LoggedIn,addToCart)
router.get('/CartProducts',LoggedIn,allCartProduct)
router.post('/deleteCart',LoggedIn,deleteCartProduct)
router.post('/addOneToQuantity',LoggedIn,addOneToQuantity)
router.post('/order',LoggedIn,addOrderFromCart)
router.post('/getOrders',LoggedIn,getOrders)
router.get('/sellerProduct',LoggedIn,sellerProduct)
export default router;
